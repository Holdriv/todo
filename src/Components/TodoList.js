import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList({todoBase, removeTask, toggleTask}) {
  
  return (
    <>
        <ol>
        {todoBase.map(todo=>{
            return(
              <div className='todo-item' key={todo.id} >
                <li
                className={todo.data ? "todo-text-strike" : "todo-text"} 
                onClick={()=> toggleTask(todo.id)}
                >
                {todo.description} 
                </li>
                <div>
                  <Button className='Btn' onClick={()=> removeTask(todo.id)} variant="outlined"  startIcon={<DeleteIcon />}>
                  </Button>
                </div>
                
              </div>
                
            )
        })}
        </ol>
        
    </>
  )
}
