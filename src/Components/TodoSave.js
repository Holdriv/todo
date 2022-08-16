import React from 'react';
import Button from '@mui/material/Button';

export default function TodoSave({newTask, setNewTask, addTask}) {
  
  return (
    <div>
        <input 
        type="text" 
        placeholder='ADD YOUR TASK' 
        value={newTask}
        onChange={e=>setNewTask(e.target.value)}/>
        <Button onClick={addTask} variant="contained" color="success">ADD</Button>
    </div>
  )
}
