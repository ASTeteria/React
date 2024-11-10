// src/features/commentsSlice.ts

import { createSlice, createAsyncThunk, PayloadAction, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { getComments } from '../services/commentService';
import { IComment } from '../models/IComment';
import {getPosts} from "../services/postService";

interface CommentsState {
    comments: IComment[];
    loading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
};

export const loadComments = createAsyncThunk('comments/loadComments', async (_,ThunkAPI) => {
    try {
        return await getComments();
    } catch (e) {
        if (e instanceof Error) {
            return ThunkAPI.rejectWithValue(e.message);
        }
        return ThunkAPI.rejectWithValue('Error');
    }
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isFulfilled(loadComments), (state, action: PayloadAction<IComment[]>) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addMatcher(isRejected(loadComments), (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load comments';
            });
    },
});

export default commentsSlice.reducer;
