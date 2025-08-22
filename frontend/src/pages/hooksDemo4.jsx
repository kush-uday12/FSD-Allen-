function HookDemo4(){
    return(
      <>
        <h1>Hook Demo 4</h1>
        <CompA name="Virat" age='35'/>
      </>
    )
}

function CompA(props){
  console.log(props);
  
  return(
    <>
       <h3>CompA</h3>
       <p>
        
       </p>
    </>
  )
}

export default HookDemo4