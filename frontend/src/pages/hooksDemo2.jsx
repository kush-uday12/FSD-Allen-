import axios from "axios"
import { useState } from "react"

function HookDemo2(){

    const [ formData, setFormData ] = useState({})
    const [ msg, setMsg ] = useState(null)

    function inHandler(e){
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);
        
        setFormData({ ...formData ,[e.target.name] : e.target.value })
        
        
    }
    
   async function formHandler(event){
    event.preventDefault()
    const res = await axios.post("http://localhost:8000/admin/addUser", formData)
    console.log(res);
    setMsg(res.data.msg)
   }

    return(
        <>
          <h1>Hooks Demo 2 Component</h1>
          <div align='center'>
           <form method="post" onSubmit={formHandler}>
            <table className="table table-bordered w-50 table-dark text-center">
                <tbody>
                    <tr>
                        <td> User Name </td> <td><input type="text" name="unm" onInput={inHandler} /></td>
                    </tr>
                    <tr>
                        <td> Password </td> <td><input type="password" name="pwd" onInput={inHandler} /></td>
                    </tr>
                    <tr>
                        <td> Email </td> <td><input type="email" name="mailId" onInput={inHandler} /></td>
                    </tr>
                    <tr>
                        <td colspan='2'><input type="submit" name="subBtn" /></td>
                    </tr>
                </tbody>
            </table>
           </form> 

            {msg && (
                <p className="alet alert-success w-50 mx-auto">
                    { msg }
                </p>
            )}

          </div>
        </>
    )
}

export default HookDemo2