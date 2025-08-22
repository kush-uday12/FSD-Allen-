import React, { createContext, useState, useContext } from "react";

// a) Create Context
const UserNameContext = createContext();

function DemoContextProvider({ children }) {
  const [name, setName] = useState("John");

  return (
    <UserNameContext.Provider value={{ name, setName }}>
      {children}
    </UserNameContext.Provider>
  );
}

function HookDemo7() {
  const [name, setName] = useState("Virat");

  return (
    <>
      <h1>Hook Demo 7, Welcome {name}</h1>
      {/* b) Context Provider */}
      <DemoContextProvider>
        <UserNameContext.Provider value={{ name, setName }}>
          <CompA />
        </UserNameContext.Provider>
      </DemoContextProvider>
    </>
  );
}

function CompA() {
  return (
    <>
      <h1>Component A</h1>
      <CompB />
    </>
  );
}

function CompB() {
  // c) Use context
  const { name, setName } = useContext(UserNameContext);
  console.log(name);

  return (
    <>
      <h1>Component B, Welcome {name}</h1>
      <button onClick={() => setName("Rahul")}>Change Name</button> <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default HookDemo7




// import { useState } from "react"

// function HookDemo5(){
//     const [name,setName] = useState("Virat")
//     return(
//       <>
//        <h1>Hook Demo 5, Welcome {name}</h1>
//        <CompA name={name} />
//       </>
//     )
// }

// function CompA(props){
//     return(
//       <>
//         <h1>Component A</h1>
//         <CompB name={props.name} />
//       </>
//     )
// }

// function CompB(props){
//     return(
//       <>
//         <h1>Component B, Welcome {props.name} </h1>
//       </>
//     )
// }

// export default HookDemo5