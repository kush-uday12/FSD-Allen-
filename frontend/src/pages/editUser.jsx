import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { userContext } from "../context/globalContext";

function EditUser(){
    const { token, header } = useContext(userContext)
    const [userData, setUserData] = useState({})
    const [formData, setFormData] = useState({})
    const [msg, setMsg] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    async function fetchUserData(){
        const res = await axios.get(`http://localhost:8000/admin/editUser/${params.uid}`,header)
        setUserData(res.data.userData)
    }

    useEffect(()=>{
        fetchUserData()
    },[])


    function inputHandler(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    async function formHandler(e){
        e.preventDefault()
        console.log(formData);
        const res = await axios.patch(`http://localhost:8000/admin/editUser/${params.uid}`,formData,header)
        setMsg(res.data.msg)
        navigate('/dash/view')
    }

    return(
      <>
        <h1>Edit Record</h1>
        <form method="post" onSubmit={formHandler}>
            <table className="table table-bordered w-50 mx-auto table-dark text-center">
                <tbody>
                    <tr>
                        <td> User Name </td> <td><input type="text" name="unm" value={userData.userName} /></td>
                    </tr>
                    <tr>
                        <td> Password </td> <td><input type="password" name="pwd" defaultValue={userData.password} onInput={ inputHandler } /></td>
                    </tr>
                    <tr>
                        <td> Email </td> <td><input type="email" name="mailId" defaultValue={userData.emailId} onInput={ inputHandler } /></td>
                    </tr>
                    <tr>
                        <td colspan='2'><input type="submit" name="updBtn" value='Update' className="btn btn-info"/></td>
                    </tr>
                </tbody>
            </table>

            {msg && (
                <p className="alert alert-success w-50 mx-auto">
                    {msg}
                </p>
            )}

           </form> 
      </>
    )
}

export default EditUser