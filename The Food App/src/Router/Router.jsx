import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from '../Components/Body'
import About from '../Components/About'
import App from '../App'
import ContactUs from "../Components/ContactUs";
import RestaurantMenu from "../Menu/RestaurantMenu";
import LandingPage from "../Landingpage/LandingPage";



const Router = createBrowserRouter([

    {
        path:"/",
        element: <LandingPage/>
    },
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/restaurants',
                element: <Body />
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element:<ContactUs/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            }
        ]
    }
])


export default Router
