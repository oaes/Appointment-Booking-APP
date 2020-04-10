import React, { useState } from 'react';
import './Appointment.css';
import Services from '../Services/Services';
import DateTaker from '../DateTaker/DateTaker';
import { Link } from '@material-ui/core';


const Appointment = () => {
    const [dates, setDates] = useState(new Date())
    
    const handleDate = d => {
        setDates(d)
    }

    
    return (
        <div className='container'>
        
            <h1 className="text-info">Appointment</h1>
            
            <DateTaker date={dates} handleDate={handleDate}></DateTaker>
            
            <Services date={dates}></Services>
        </div>
    );
};

export default Appointment;