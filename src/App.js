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
      description: newTask,
      data: false
    }
    setTodoBase(oldList=>[...oldList, Task])
    setNewTask('');
  }

  const removeTask=(id)=>{
    const newTodoBase= todoBase.filter(todo=> todo.id !== id)
    setTodoBase(newTodoBase)
  }

  const toggleTask=(id)=>{
    setTodoBase([...todoBase.map((todo)=>
        todo.id === id ? {...todo, data: !todo.data}:{...todo}
      )
    ])
  }

  return (
    <div className='App'>
        <Header/>
        <TodoSave 
          newTask={newTask} 
          setNewTask={setNewTask} 
          addTask={addTask}
          />
        <TodoList 
          todoBase={todoBase} 
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
    </div>
  );
}

export default App;
