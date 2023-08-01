import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";

const CalendarTest = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    console.log("date section")
    console.log(Date.parse(date))
  };
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    console.log()
    console.log("time section")
    console.log(Date.parse(date+ " " + e.target.value))
  };

  return (
    <div>
      <button id="DatePicker" className="datepicker-native btn btn-secondary btn-sm">
        <i className="far fa-calendar-alt"></i>
        <input type="date" className="datepicker-native-input" />
      </button>
      <p>Selected Date: {date}</p>
      <input
        type="time"
        onChange={handleTimeChange}
        ref={dateInputRef}
      />
      <p>Selected Time: {time}</p>
    </div>
  );
}

export default CalendarTest;