
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
import ForgetPassword from './component_page/page/ForgetPassword/ForgetPassword.jsx';
import EmailSent from './component_page/page/ForgetPassword/EmailSent.jsx';
import ResetPassword from './component_page/page/ForgetPassword/ResetPassword.jsx';
import TermsAndConditions from './component_page/page/termsandconditions.jsx'
import ContactPage from './component_page/page/contact.jsx'
import NewsPage from './component_page/page/news.jsx'
import Service from './component_page/page/service.jsx'
import ChooseServices from './component_page/page/choose_services.jsx'
import News_DeTail_Page from './component_page/page/news_detail.jsx'
import FeedbackPage from './component_page/page/feedback.jsx'
import Service_Detail_Page from './component_page/page/service_detail.jsx'
import Training from './component_page/page/training.jsx'
import PriceList from './component_page/page/price_list.jsx'
import AboutUs from './component_page/page/aboutUs.jsx'
import TrainingDetail from './component_page/page/training_detail.jsx'
import FAQ_Page from './component_page/page/faq.jsx'
import Equipment_Page from './component_page/page/equipment.jsx'
import Career from './component_page/page/career.jsx'
import Payment from './component_page/page/payment.jsx'
import ABoutUs from './component_page/page/aboutUs.jsx'
import Service_Tracking from './component_page/page/servie_tracking.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App chứa Header và Footer
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "email-sent",
        element: <EmailSent />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "choose-services",
        element: <ChooseServices />,
      },
      {
        path: "news_detail",
        element: <News_DeTail_Page />,
      },
      {
        path: "feedback",
        element: <FeedbackPage />,
      },
      {
        path: "training",
        element: <Training />
      },
      {
        path: "price-list",
        element: <PriceList />
      },
      {
        path: "training-detail",
        element: <TrainingDetail />
      },
      {
        path: "service_detail",
        element: <Service_Detail_Page />,
      },
      {
        path: "faq",
        element: <FAQ_Page />,
      },
      {
        path: "equipment",
        element: <Equipment_Page />
      },
      {
        path: "career",
        element: <Career />
      },
      {
        path: "payment",
        element: <Payment />
      },
      {
        path: "service-tracking",
        element: <Service_Tracking />
      },
    ]
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
