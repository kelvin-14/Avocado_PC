import { useEffect, useState } from 'react';
import '../../css/Details.css'
import Task from '../../objects/Task';
import CalendarButton from './CalendarButton';
import TimePickerButton from './TimePickerButton';
import { getFormattedDate, getFormattedTime } from '../../utils/TimeUtils';

function Details(
    {focusedTask}: {focusedTask: Task | undefined}
) {

  return (
    <div className="Details">
        <input className = "taskTitle"  value={focusedTask?.title} onChange={()=>{}}/>
        <div className= "DetailItem">
            <CalendarButton label = {focusedTask?.dueDate ? getFormattedDate(focusedTask.dueDate) :"Click to set due date"} setTaskDueDate={()=>{}}/>
        </div>
        <div className= "DetailItem">
            <TimePickerButton label = {focusedTask?.timeDue ? getFormattedTime(focusedTask.timeDue) : "Click to set time due"} setTaskTimeDue={()=>{}}/>
        </div>
        <div className= "DetailDescription">
            <span className="material-symbols-outlined">
                article
            </span>
            <textarea className = "DetailTextArea" placeholder='Add a description...' cols={30} rows={10}></textarea>
        </div>
    </div>
  );
}

export default Details;
