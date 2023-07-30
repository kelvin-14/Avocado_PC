import { useEffect, useState } from 'react';
import Task from '../../objects/Task';

function TaskListItem(
  {task, toggleCompleted}: {task: Task, toggleCompleted: (task: Task) => void}
) {
  return (
    <div className="TaskListItem">
      <input style = {{accentColor: task.completed ? 'gray' : 'black'}} type="checkbox" onChange={() => toggleCompleted(task)} checked={task.completed === true}/>
      <label style = {{color: task.completed ? 'gray' : 'black'}}> {task.title} </label>
    </div>
  );
}

export default TaskListItem;
