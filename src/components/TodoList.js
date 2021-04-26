import React from 'react'

export default function TodoList({todos,setTodos}) {
    const handleDelete=({id})=>{
        setTodos(todos.filter((value)=>value.id !== id));
    }
    return (
        <div>{
            todos.map((value) => (
                 <li className="list-item" key={value.id}>
                     <input type="text" className="list" value={value.title} onChange={(e)=>e.preventDefault} />
                     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button-deleted" onClick={()=>handleDelete(value)}>
                Done
            </button>
            </div>
                 </li>
    ))}
        </div>
        
    );
}
