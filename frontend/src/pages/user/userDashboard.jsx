import { Link, Outlet } from "react-router-dom"
import NavBar from "../../component/userNav"

function UserDashboard(){
    return(
      <>
        <NavBar/>
        <h1>User Dashboard</h1>
        <Outlet />
      </>
    )
}

export default UserDashboard