function AddNewTask(){
    return(
      <>
        <h1>Add New Task</h1>
        <form method="post"> 
         <table className="table table-bordered w-50 mx-auto  table-success text-center mt-4">
            <tbody>
                <tr><td>Task:</td><td> <input type="text" name="txt1" /> </td></tr>
                <tr><td>Description:</td><td> <textarea name="txtArea"> </textarea> </td></tr>
                <tr><td colSpan="2"> <button type="submit" className="btn btn-primary"> Add Task </button> </td></tr>
            </tbody>
         </table>
        </form>
      </>
    )
}

export default AddNewTask