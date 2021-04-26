import React from 'react'
//import {v4 as uuidV4} from "uuid";
const Form=({input,setInputs,todo,setTodo})=> {
    const onInputChange=(e)=>{
    setInputs(e.target.value);
    }
    const formOnSubmit=(e)=>{
        e.preventDefault();
        setTodo([...todo,input]);
        console.log(todo);
        setInputs("");
    }
    return (
        <div>
            <form onSubmit={formOnSubmit}>
                <input className="task-input" type="text" placeholder="Enter the item" value={input} required onChange={onInputChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="button-add" type="submit">Add</button>
            </form>
        </div>
    )
}
export default Form;
