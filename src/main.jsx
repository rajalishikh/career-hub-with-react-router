import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
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
        path: '/footer',
        element:<Footer></Footer>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
   
  </React.StrictMode>,
)
