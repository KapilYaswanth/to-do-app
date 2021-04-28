import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/form'
import TodoList from './components/TodoList';
import Errorboundary from './components/Errorboundary';
const App=()=> {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState(false);

  return (
    <div className="container"> 
      <div className="app-wrapper">
        <div>
          <Errorboundary><Header status={status} setStatus={setStatus}/>
          <Form input={input} setInputs={setInput} todo={todo} setTodo={setTodo} />
          <TodoList  todos={todo} setTodos={setTodo}/>
          </Errorboundary>
    </div>
    </div>
    </div>
  );
}

export default App;