import { useEffect, useState } from 'react';
import '../../css/Details.css'
import Task from '../../objects/Task';
import CalendarButton from './CalendarButton';
import TimePickerButton from './TimePickerButton';

function Details(
    {focusedTask}: {focusedTask: Task | undefined}
) {

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getFormattedDate = (dateLong: number) => {
    console.log(dateLong)
    const date = new Date(dateLong)
    const dayOfTheMonth = date.getDate()
    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear()

    return days[day] + ", " + months[month] + " " + dayOfTheMonth + ", " + year  
  }

  const getFormattedTime = (timeLong: number) => {
    const time = new Date(timeLong)
    const hour = time.getHours()
    const minute = time.getMinutes()
    const am_pm = hour <= 12 ? "A.M." : "P.M."

    return hour + ":" + minute + " " + am_pm
  }


  return (
    <div className="Details">
        <input className = "taskTitle"  value={focusedTask?.title} onChange={()=>{}}/>
        <div className= "DetailItem">
            <CalendarButton label = {focusedTask?.dueDate ? getFormattedDate(focusedTask.dueDate) :"Date Due"} setTaskDueDate={()=>{}}/>
        </div>
        <div className= "DetailItem">
            <TimePickerButton label = {focusedTask?.timeDue ? getFormattedTime(focusedTask.timeDue) : "Time Due"} setTaskTimeDue={()=>{}}/>
        </div>
    </div>
  );
}

export default Details;
