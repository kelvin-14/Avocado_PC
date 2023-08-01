import { useState } from 'react';
import '../../css/TimePickerButton.css'

const TimePickerButton = ({label}: {label: string | null}) => {
    const [time, setTime] = useState("")
    
    const changeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value)
        console.log(e.target.value)
    } 

    return (
        <div className='TimePickerButton'>
        <button id="timePicker" className="timepicker-native">
            <input 
                type="time" 
                className="timepicker-native-input" 
                onChange={changeTime}
            />
            <span className="material-symbols-outlined">
                schedule
            </span>
            {
                label !== null ? <p className = "pickerLabel">{label}</p> : null
            }
        </button>
        </div>
    );
}

export default TimePickerButton;