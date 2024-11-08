import {configureStore} from "@reduxjs/toolkit";
import usersReducer from '../Slices/usersSlice';
import postsReducer from '../Slices/postsSlice';
import commentsReducer from '../Slices/commentsSlice';


export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

