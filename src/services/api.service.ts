import axios from 'axios';
import { IUser } from '../models/IUser';
import { IPost } from '../models/IPost';
import { IComment } from '../models/IComment';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const allUsers = () => axiosInstance.get<IUser[]>('/users');
export const allPosts = () => axiosInstance.get<IPost[]>('/posts');
export const allComments = () => axiosInstance.get<IComment[]>('/comments');