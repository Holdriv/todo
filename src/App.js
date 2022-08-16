import './index.css';
import Header from './Components/Header';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoSave from './Components/TodoSave';



function App() {
  const[newTask, setNewTask]=useState("");
  const[todoBase, setTodoBase]=useState([]);

  const addTask=()=>{
    if(!newTask){
      alert('Enter new Task');
      return;
    }
    const Task={
      id: Math.floor(Math.random()*1000),
      description: newTask
    }
    setTodoBase(oldList=>[...oldList, Task])
    setNewTask('');
    console.log(todoBase);
  }

  const removeTask=(id)=>{
    const newTodoBase= todoBase.filter(todo=> todo.id !== id)
    setTodoBase(newTodoBase)
  }

  return (
    <div className='App'>
        <Header/>
        <TodoSave newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
        <TodoList todoBase={todoBase} removeTask={removeTask}/>
    </div>
  );
}

export default App;
