import { useEffect, useState } from 'react';
import Task from '../../objects/Task';
import '../../css/TaskListItem.css'

function TaskListItem(
  {task, toggleCompleted, changeFocusedTask, closeDetailsDiv}: 
  {task: Task, toggleCompleted: (task: Task) => void, changeFocusedTask: () => void, closeDetailsDiv: () => void}
) {

  return (
    <div className="TaskListItem" id="Test">
      <input className="taskCheckbox" type="checkbox" onChange={() => toggleCompleted(task)} checked={task.completed === true}/>
      <div className="taskLabel" onClick={closeDetailsDiv}>
        <label> {task.title} </label> 
      </div>
      
    </div>
  );
}

export default TaskListItem;
