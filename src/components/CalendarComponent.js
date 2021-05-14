import React, { useState } from 'react';
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';


function CalendarComponent(props) {
  const [date, setDate] = useState(new Date())

  const onChange = () => {
    setDate(date)
  }


  return (

    <div className="calendar-component">

      <Calendar onChange={onChange} value={date} />
    </div>

  );
}

export default CalendarComponent;