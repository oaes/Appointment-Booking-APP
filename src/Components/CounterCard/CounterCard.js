import React from 'react';
import './CounterCard.css';

const CounterCard = (props) => {
    return (
        <div  
            className="counter-card" 
            style={{backgroundColor: props.data.backgroundColor}}
        >
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <h1>{props.data.count}</h1>
                </div>
                <div className="col-8 text-left">
                    <p>{props.data.text}</p>
                </div>
            </div>
        </div>
    );
};

export default CounterCard;
