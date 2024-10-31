import { createBrowserRouter } from 'react-router-dom';
import UsersPage from '../pages/UsersPage';
import PostsPage from '../pages/PostsPage';
import CommentsPage from '../pages/CommentsPage';
import PostsWithCommentsPage from '../pages/PostsWithCommentsPage';
import Layouts from "../layout/Layouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            { path: 'users', element: <UsersPage /> },
            { path: 'posts', element: <PostsPage /> },
            { path: 'comments', element: <CommentsPage /> },
            { path: 'posts-with-comments', element: <PostsWithCommentsPage /> },
        ],
    },
]);



export default router;
