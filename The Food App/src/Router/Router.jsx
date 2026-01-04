import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from '../Components/Body'
import About from '../Components/About'
import App from '../App'
import ContactUs from "../Components/ContactUs";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element:<ContactUs/>
            }
        ]
    }
])


export default Router
