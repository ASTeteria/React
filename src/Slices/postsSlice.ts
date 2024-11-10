import {IPost} from "../models/IPost";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getPosts} from "../services/postService";
import {getUsers} from "../services/userService";

interface PostsState {
    posts: IPost[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

export const loadPosts = createAsyncThunk('posts/loadPosts', async (_, ThunkAPI)=>{
    try {
        return await getPosts();
    } catch (e) {
        if (e instanceof Error) {
            return ThunkAPI.rejectWithValue(e.message);
        }
        return ThunkAPI.rejectWithValue('Error');
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isFulfilled(loadPosts), (state, action: PayloadAction<IPost[]>)=>{
                state.loading = false;
                state.posts= action.payload;
            })
            .addMatcher(isRejected(loadPosts), (state, action)=>{
                state.loading = false;
                state.error = action.error.message || 'Error'
            })
    },

});

export default postsSlice.reducer

