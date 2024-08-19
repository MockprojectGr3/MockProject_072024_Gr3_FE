
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
import ContactPage from './component_page/page/contact.jsx'
import NewsPage from './component_page/page/news.jsx'
import Service from './component_page/page/service.jsx'
import Profile from './component_page/page/profile/UserProfile.jsx'
import Personal from './component_page/page/profile/editPersonal.jsx'
import Account from './component_page/page/profile/editAccount.jsx'
import Information from './component_page/page/profile/editJobProfile.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "news",
        element: <NewsPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editPersonal",
        element: <Personal />
      },
      {
        path: "editAccount",
        element: <Account />
      },
      {
        path: "editJobProfile",
        element: <Information />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
