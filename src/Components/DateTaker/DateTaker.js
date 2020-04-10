import React from 'react';
import Calendar from 'react-calendar';
import DateTakerBanner from '../../Images/Mask Group 1.png';
import './DateTaker.css';
import 'react-calendar/dist/Calendar.css';

const DateTaker = (props) => {
    return (
        <div className="row m-5">
            <div className="col-md-6 mb-3">
                <Calendar
                    onChange={d => props.handleDate(d)}
                    value={props.date}
                    minDate={new Date()}
                    maxDate={new Date(2020,11,31)}
                    minDetail={'year'}
                />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <img className='w-100' src={DateTakerBanner} alt=""/>
            </div>
        </div>
    );
};

export default DateTaker;