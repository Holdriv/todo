import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList({todoBase, removeTask}) {
  return (
    <div>
        <ol>
        {todoBase.map(todo=>{
            return(
                <li key={todo.id} >{todo.description} <Button className='btn-delete' onClick={()=> removeTask(todo.id)} variant="outlined" size="small" startIcon={<DeleteIcon />}>
                    
              </Button></li>
            )
        })}
        </ol>
        
    </div>
  )
}
