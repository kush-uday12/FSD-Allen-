
import { useContext, useState } from "react";
import { userContext } from "../context/globalContext";
import axios from "axios"

function AddUser() {
    const {header} =useContext(userContext);
    

    let[data,setData] = useState({});
    let[file,setFileData] = useState(null);
    let[msg,setMsg] = useState("");

    function formDataHandler(event){
        setData({...data, [event.target.name]: event.target.value});
    }

    function fileHandler(event){
        setFileData(event.target.files[0]);
    }

    async function formHandler(event){
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("unm",data.unm);
        formData.append("pwd",data.pwd);
        formData.append("mailId",data.mailId);
        formData.append("profilePic",file);

        try{
            console.log(formData);
            const res = await axios.post("http://localhost:8000/admin/addUser",formData,header)
            setMsg(res.data.msg);
            event.target.reset()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <h1>Add new user Component</h1>
            <form method="post" onSubmit={formHandler}>
   <table className="table table-bordered w-50 mx-auto  table-dark text-center mt-4">
    <thead>
        <tr>
            <td colSpan="2"> Add User Form </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>User Name</td><td><input type="text" name="unm" onInput={formDataHandler}/></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" name="pwd" onInput={formDataHandler} /></td>
        </tr>
        <tr>
            <td>Email</td>
            <td><input type="email" name="mailId" onInput={formDataHandler} /></td>
        </tr>
        <tr>
        <td>Profile Pic</td>
        <td><input type="file" name="profilePic" onChange={fileHandler}/></td>
        </tr>
        <tr>
            <td colSpan="2"><input type="submit" name="addBtn" className="btn btn-info"/></td>
        </tr>
    </tbody>
</table>
    </form>
        </>
    )
}

export default AddUser;