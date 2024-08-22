import { useEffect, useState } from 'react'
import reactLogo from './assets/image/react.svg'
import viteLogo from './assets/image/vite.svg'
import axios from './util/axios'
import './style/App.css'
import './style/index.css'
import { Link, Outlet } from "react-router-dom";

import Footer from './component_page/layout/Footer'
import Header from './component_page/layout/header'
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
