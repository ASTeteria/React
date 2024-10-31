import { create } from 'zustand';
import { allUsers, allPosts, allComments } from '../services/api.service';
import { IUser } from '../models/IUser';
import { IPost } from '../models/IPost';
import { IComment } from '../models/IComment';

interface ZuState {
    users: IUser[];
    posts: IPost[];
    comments: IComment[];
    zuData: () => Promise<void>;
}

export const useZuStore = create<ZuState>((set) => ({
    users: [],
    posts: [],
    comments: [],
    zuData: async () => {
        const usersResponse = await allUsers();
        const postsResponse = await allPosts();
        const commentsResponse = await allComments();

        set({
            users: usersResponse.data,
            posts: postsResponse.data,
            comments: commentsResponse.data,
        });
    },
}));
