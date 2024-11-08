import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsWithCommentsPage from "../pages/PostsWithCommentsPage";

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [
        { path: 'users', element: <UsersPage /> },
        { path: 'posts', element: <PostsPage /> },
        { path: 'comments', element: <CommentsPage /> },
        { path: 'posts-with-comments', element: <PostsWithCommentsPage /> },
    ],
  },

]);


export  default router