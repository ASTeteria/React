import axios from 'axios';
import { IPostForm } from '../models/IPostForm';
import { IPosts } from '../models/IPosts';

export const createPost = (post: IPostForm) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(response => response.data);
};
export const getAllPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data);
};