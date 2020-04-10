import React, { useState } from 'react';

const VisitBtn = (props) => {
    const [visited, setVisited] = useState(props.visited)
    const handleVisit = (id) => {
        fetch('https://doctorsbackend.herokuapp.com/dailyAppointment/updateVisit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(res => res.json())
        setVisited(true)
    }

    return (
        <div>
            {visited ? <button className='btn btn-success pt-0 pb-0' disabled>Visited</button> : <button onClick={() => handleVisit(props.id)} className='btn btn-danger pt-0 pb-0'>Not Visited</button>}
        </div>
    );
};

export default VisitBtn;