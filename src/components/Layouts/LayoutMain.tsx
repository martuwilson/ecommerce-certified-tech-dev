import { Outlet } from "react-router-dom"
import { Navbar } from "../UI/Navbar"



export const LayoutMain = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
    </div>
  )
}