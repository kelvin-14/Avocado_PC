import { useEffect, useState } from 'react';
import Task from '../../objects/Task';

function TaskListItem(
  {id,title}: {id: number, title: string}
) {
  return (
    <div className="TaskListItem">
      <input type="checkbox"/>
      <label> {title} </label><br></br>
    </div>
  );
}

export default TaskListItem;
