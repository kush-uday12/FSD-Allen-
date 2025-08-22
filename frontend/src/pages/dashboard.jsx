import { Outlet } from "react-router-dom"
import NavBar from "../component/myNav"

function Dashboard(){
    return(
        <>
           <NavBar />
           <h1>Dashboard Component</h1>
           <Outlet />
        </>
    )
}
export default Dashboard