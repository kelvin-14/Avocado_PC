import { useEffect, useState } from 'react';
import '../../css/TaskDetails.css'
import Task from '../../objects/Task';
import EmptyPage from './EmptyPage';
import Details from './Details';

function TaskDetails(
    {focusedTask, deleteTask}: {focusedTask: Task | undefined, deleteTask: () => void}
) {


  return (
    <div className="TaskDetails" id = "TaskDetails">
        {
          focusedTask === undefined ?
          <EmptyPage icon = "receipt_long" label = "click a task to view more information about it"/>
          : 
          <Details focusedTask={focusedTask} deleteTask={deleteTask}/>
        }
    </div>
  );
}

export default TaskDetails;
