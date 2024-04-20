import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Appliedjobs from './Components/Applied jobs/Appliedjobs';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import Statistics from './Components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
      path: '/',
      element:<Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/Applied jobs',
        element:<Appliedjobs></Appliedjobs>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
   
  </React.StrictMode>,
)
