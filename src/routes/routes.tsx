import {createBrowserRouter} from "react-router-dom";
import Layouts from "./layouts/Layouts";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layouts/>, children: [
            { index:true, element: <HomePage/>},
            { path: 'users', element: <UsersPage/>},
            { path: 'posts', element: <PostsPage/>},
            { path: 'comments', element: <CommentsPage/>},
        ],
    },
]);