import { useEffect, useState } from 'react';
import Task from '../../objects/Task';

function TaskListItem(
  {task, toggleCompleted}: {task: Task, toggleCompleted: (task: Task) => void}
) {
  return (
    <div className="TaskListItem">
      <input type="checkbox" onChange={() => toggleCompleted(task)} checked={task.completed === true}/>
      <label> {task.title} </label><br></br>
    </div>
  );
}

export default TaskListItem;
