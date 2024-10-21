import axios from 'axios';

export const createPost = (post: any) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(response => response.data);
};
