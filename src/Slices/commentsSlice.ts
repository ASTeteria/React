// src/features/commentsSlice.ts

import { createSlice, createAsyncThunk, PayloadAction, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { getComments } from '../services/commentService';
import { IComment } from '../models/IComment';

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

export const loadComments = createAsyncThunk('comments/loadComments', async () => {
    const comments = await getComments(); // Викликаємо функцію сервісу для отримання коментарів
    return comments;
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
