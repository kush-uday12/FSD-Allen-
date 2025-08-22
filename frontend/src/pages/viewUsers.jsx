import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../context/globalContext"

function ViewUser(){

    const [ count , setCount ] = useState(0)
    const [ count2 , setCount2 ] = useState(100)

    const { token, header } = useContext(userContext)
    const [userData,setUserData] = useState([])
    const imgCss = {width:"30px",height:"30px",borderRadius:"50%"}

    async function fetchAllData(){
        const res = await axios.get("http://localhost:8000/admin/showUser",header)
        setUserData(res.data)
    }

    async function deleteUser(uid){
        if(confirm('Are you sure want to delete...')){
        const res = await axios.delete(`http://localhost:8000/admin/deleteUser/${uid}`,header)
        alert(res.data.msg)
        fetchAllData()
        }
    }

    useEffect(()=>{
        fetchAllData()        
    },[])

    return(
        <>

           { userData.length>0 && (
            <table className="table table-bordered table-striped w-75 mx-auto">
                <thead className="table-dark">
                    <tr>
                        <th>Profile</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Active</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { userData.map((user)=>(
                        <tr>
                            <td><img style={imgCss} src={user.profilePic ?`http://localhost:8000/${user.profilePic}`:`/images/Sample.jpg`} /></td>
                            <td>{ user.userName }</td>
                            <td>{ user.emailId }</td>
                            <td>{ user.password }</td>
                            <td>{ user.hasRole }</td>
                            <td className={user.isActive?'text-success':'text-danger'}>{ user.isActive ? "Active" : "InActive" }</td>
                            <td><Link to={`/dash/edit/${user._id}`}>Edit</Link></td>
                            <td><button onClick={()=>deleteUser(user._id)} className="btn btn-danger" > Delete </button></td>
                        </tr>
                    )) }
                </tbody>
            </table>
           )}

        </>
    )
}
export default ViewUser