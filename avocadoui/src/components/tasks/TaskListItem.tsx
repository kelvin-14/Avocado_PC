import { useEffect, useState } from 'react';
import Task from '../../objects/Task';
import '../../css/TaskListItem.css'

function TaskListItem(
  {task, toggleCompleted, changeFocusedTask}: 
  {task: Task, toggleCompleted: (task: Task) => void, changeFocusedTask: () => void}
) {
  return (
    <div className="TaskListItem">
      <input className="taskCheckbox" type="checkbox" onChange={() => toggleCompleted(task)} checked={task.completed === true}/>
      <div className="taskLabel" onClick={changeFocusedTask}>
        <label> {task.title} </label> 
      </div>
      
    </div>
  );
}

export default TaskListItem;
