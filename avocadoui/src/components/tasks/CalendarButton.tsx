import { useState } from 'react';
import '../../css/CalendarButton.css'

const CalendarButton = () => {
    const [date, setDate] = useState("")
    
    const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
        console.log(e.target.value)
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
        </button>
        </div>
    );
}

export default CalendarButton;