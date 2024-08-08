import { useEffect, useState } from 'react'
import reactLogo from './assets/image/react.svg'
import viteLogo from './assets/image/vite.svg'
import axios from './util/axios'
import './style/App.css'
import RegisterPage from './component_page/page/register'
import { Link, Outlet } from "react-router-dom";

import Header from './component_page/layout/header'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {

    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`)
      console.log(">>>Check res: ", res)
    }

    fetchHelloWorld()

  }, [])


  return (
    <>
      <Header />
      <Outlet />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          welcome to homepage!!!!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        {/* <a href='register'>Register</a>            */}
        <Link to={"/register"} >Register 1</Link>
      </p>
    </>
  )
}

export default App
