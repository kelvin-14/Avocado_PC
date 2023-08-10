import { useEffect, useState } from 'react';
import '../../css/TaskDetails.css'
import Task from '../../objects/Task';
import EmptyPage from './EmptyPage';
import Details from './Details';

function TaskDetails(
    {
      focusedTask, deleteTask, addTask}: {focusedTask: Task | undefined, 
        deleteTask: () => void, 
        addTask: (task: Task) => void
    }
) {


  return (
    <div className="TaskDetails" id = "TaskDetails">
        {
          focusedTask === undefined ?
          <EmptyPage icon = "receipt_long" label = "click a task to view more information about it"/>
          : 
          <Details focusedTask={focusedTask} deleteTask={deleteTask} addTask = {addTask}/>
        }
    </div>
  );
}

export default TaskDetails;
