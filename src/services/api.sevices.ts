import axios from 'axios';

export const getUsers = () => {
    return axios.get('https://dummyjson.com/users')
        .then(value => value.data.users);
};

export const getPostsUser = (userId: number) => {
    return axios.get(`https://dummyjson.com/posts/user/${userId}`)
        .then(value => value.data.posts);
};