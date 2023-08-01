import { useEffect, useState } from 'react';
import '../../css/Details.css'
import Task from '../../objects/Task';
import CalendarButton from './CalendarButton';
import TimePickerButton from './TimePickerButton';

function Details(
    {focusedTask}: {focusedTask: Task | undefined}
) {
  const [task, setTask] = useState<Task>()
  const [title, setTitle] = useState(focusedTask?.title)

  useEffect(() => {
    setTask(focusedTask)
  }) 

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div className="Details">
        <input className = "taskTitle"  value={title} onChange={changeTitle}/>
        <div className= "DetailItem">
            <CalendarButton label = {"Date Due"}/>
        </div>
        <div className= "DetailItem">
            <TimePickerButton label = {"Time Due"}/>
        </div>
    </div>
  );
}

export default Details;
