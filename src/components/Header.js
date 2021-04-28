import React from 'react'

export default function Header({status,setStatus}) {
    const handleClick=()=>{
        console.log('clicked');
        setStatus(true);
        console.log(status);
    }
    if(status===true)
           {
               throw new Error("It is an error");
           }
    return (
        
        <div className="header">
        <h1 onClick={handleClick}>To-do App</h1> 
        </div>
    )
}

