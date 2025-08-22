import { useRef, useState } from "react"

function DemoApp(){
    const inpRef = useRef(null)
    const formRef = useRef(null)
    const [ tasks , setTasks] = useState({})
    function formHandler(e){
        e.preventDefault()
        setTasks([...tasks , {[formRef.current.txt1]:formRef.current.txt1.value, [formRef.current.txtArea]:formRef.current.txtArea.value}])

        // console.log(formRef.current);
        // console.log(formRef.current.txt1);
        // console.log(formRef.current.txt1.value);
        // console.log(formRef.current.txtArea);
        // console.log(formRef.current.txtArea.value);
  
                
        // console.log(inpRef.current.value);
        // inpRef.current.style.border='2px solid red'
    }
    return(
      <>
        <h1>Demo App</h1>
        <form method="post" onSubmit={ formHandler }>
         <table>
            <tbody>
                <tr><td> <input type="text" name="txt1" ref={formRef} /> </td></tr>
                <tr><td> <textarea name="txtArea" ref={formRef}> </textarea> </td></tr>
                <tr><td> <button type="submit"> Button </button> </td></tr>
            </tbody>
         </table>
        </form>
      </>
    )
}

export default DemoApp