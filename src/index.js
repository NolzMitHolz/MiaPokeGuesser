import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Projects from "./routes/Projects";
import About from "./routes/About";
import PokeGuesser from "./routes/PokeGuesser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/projects/pokeGuesser",
        element: <PokeGuesser/>
    },
    {
        path: "/about",
        element: <About/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

