import React, {createContext, useContext, useState, useEffect, FC, PropsWithChildren} from 'react';
import { allUsers, allPosts, allComments } from '../services/api.service';
import { IUser } from '../models/IUser';
import { IPost } from '../models/IPost';
import { IComment } from '../models/IComment';

interface MyContextProps {
    users: IUser[];
    posts: IPost[];
    comments: IComment[];
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const ContextProvider:FC<PropsWithChildren<{}>> = ({ children }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const allInfo = async () => {
            const usersResponse = await allUsers();
            const postsResponse = await allPosts();
            const commentsResponse = await allComments();

            setUsers(usersResponse.data);
            setPosts(postsResponse.data);
            setComments(commentsResponse.data);
        };

        allInfo();
    }, []);

    return (
        <MyContext.Provider value={{ users, posts, comments }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('Error');
    }
    return context;
};
