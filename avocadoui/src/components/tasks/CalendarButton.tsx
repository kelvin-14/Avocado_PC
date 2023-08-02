import { useState } from 'react';
import '../../css/CalendarButton.css'

const CalendarButton = ({label, setTaskDueDate}: {label: string | null, setTaskDueDate: (date: string) => void}) => {
    
    const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDueDate(e.target.value)
    } 

    return (
        <div className='CalendarButton'>
        <button id="DatePicker" className="datepicker-native">
            <input 
                type="date" 
                className="datepicker-native-input" 
                onChange={changeDate}
            />
            <span className="material-symbols-outlined">
                calendar_month
            </span>
            {
                label !== null ? <p className = "pickerLabel">{label}</p> : null
            }
        </button>
        </div>
    );
}

export default CalendarButton;