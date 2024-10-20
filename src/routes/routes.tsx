import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";

export const router = createBrowserRouter([
    {
        path:'/', element:<Layout/>,
        children:[
            {
                index:true, element:<HomePage/>
            },
            {
                path: 'users', element: <UsersPage/>
            }
        ]
    }
]);
