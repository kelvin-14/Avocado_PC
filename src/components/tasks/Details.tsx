import { useEffect, useState } from 'react';
import '../../css/Details.css'
import Task from '../../objects/Task';
import CalendarButton from './CalendarButton';
import TimePickerButton from './TimePickerButton';
import { getFormattedDate, getFormattedTime, datePickerStringToLong, timePickerStringAndSelectedDateLong } from '../../utils/TimeUtils';

function Details(
    {focusedTask, deleteTask, addTask}: {
        focusedTask: Task | undefined, 
        deleteTask: ()=> void, 
        addTask: (task:Task) => void
    }
) {
    const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value
        const newTask = focusedTask!
        newTask.title = newTitle
        addTask(newTask)
    }
    const editDate = (newDate: string) => {
        const newTask = focusedTask!
        newTask.dueDate = datePickerStringToLong(newDate)
        addTask(newTask)
    }

    const editTime = (newTime: string) => {
        const newTask = focusedTask!
        const dateString = getFormattedDate(focusedTask?.dueDate!)
        newTask.timeDue = timePickerStringAndSelectedDateLong(newTime, dateString)
        addTask(newTask)
    }
    
    const editDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTask = focusedTask!
        const newDescription = e.target.value
        newTask.description = newDescription
        addTask(newTask)
    }

  return (
    <div className="Details" id="Details">
        <input className = "taskTitle"  value={focusedTask?.title} onChange={editTitle}/>
        <div className= "DetailItem">
            <CalendarButton 
                label = {focusedTask?.dueDate ? getFormattedDate(focusedTask.dueDate) :"Click to set due date"} 
                setTaskDueDate={(dateString)=>{editDate(dateString)}}
            />
        </div>
        <div className= "DetailItem">
            <TimePickerButton 
                label = {focusedTask?.timeDue ? getFormattedTime(focusedTask.timeDue) : "Click to set time due"} 
                setTaskTimeDue={(timeString)=>{editTime(timeString)}}
            />
        </div>
        <div className= "DetailDescription">
            <span className="material-symbols-outlined">
                article
            </span>
            <textarea 
                className = "DetailTextArea" 
                value = {focusedTask?.description} 
                placeholder='Add a description...' cols={30} rows={10}
                onChange={editDescription}
            />
        </div>
        <div className='Options'>
            <button id = "deleteButton" onClick = {deleteTask}>
                <span className="material-symbols-outlined" >
                    delete
                </span>
            </button>
            
        </div>
    </div>
  );
}

export default Details;
