import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/global.css'
import RegisterPage from './component_page/page/register.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './component_page/page/login.jsx'
import HomePage from './component_page/page/homepage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: <div>Hello world!</div>,

    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "register",
        element: <RegisterPage />
      }
    ]
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "login",
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
