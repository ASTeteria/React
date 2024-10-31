import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import {ContextProvider} from "./context/MyContext";
import router from "./routes/routes";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
);

