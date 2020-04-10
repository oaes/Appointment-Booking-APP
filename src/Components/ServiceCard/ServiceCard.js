import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className='m-2'>
            <div className="card" style={{width: "350px"}}>
                <div className="card-body">
                    <h5 className="card-title text-info">{props.title}</h5>
                    <p className="card-text"><strong>{props.time}</strong></p>
                    <button className="btn btn-info" 
                        onClick={()=>props.openModal(props.title,props.time,props.startTime)}>Book a Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;