import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/form'
import TodoList from './components/TodoList';
const App=()=> {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  return (
    <div className="container"> 
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form input={input} setInputs={setInput} todo={todo} setTodo={setTodo} />
        </div>
        <div>
          <TodoList  todos={todo} setTodos={setTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;