import {createBrowserRouter} from "react-router-dom";
import Layouts from "../layouts/Layouts";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostCommentsPage from "../pages/PostCommentsPage";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layouts/>, children: [
            { index:true, element: <HomePage/>},
            { path: 'users', element: <UsersPage/>},
            {path: 'users/:id' ,element:<UserDetailsPage />},
            { path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element:<PostCommentsPage />},
            { path: 'comments', element: <CommentsPage/>},
        ],
    },
]);