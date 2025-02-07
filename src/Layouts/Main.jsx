import { Outlet } from "react-router-dom"
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-screen-xl mx-auto">
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Main