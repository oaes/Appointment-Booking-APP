import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const AppointmentForm = (props) => {
    const {title, time, startTime, date} = props.appointmentInfo
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const appointmentDetails = {
            name,
            email,
            phone,
            service: title,
            startTime,
            appointmentDate: date.toDateString(),
            prescription: '',
            visited: false,
            action: 'pending'
        }
        // console.log(appointmentDetails)
        fetch('https://doctorsbackend.herokuapp.com/bookAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentDetails)
        })
            .then(res => res.json())
            .then(appointment => {
                alert(`
                    Patient Name: ${name}
                    Appointment ID: ${appointment._id}
                    Date: ${date.toDateString()}
                    Time: ${startTime}
                `)
                setName('')
                setEmail('')
                setPhone('')
            })
            props.closeModal()
    }

    return (
        <div>
            <Modal 
                isOpen={props.modalIsOpen} 
                onRequestClose={props.closeModal} 
                style={{
                    overlay:{
                        background: "rgba(211,211,211,0.5)"
                    },
                    content:{
                        height:'400px',
                        width: '600px',
                        textAlign: 'center',
                        borderRadius: '20px',
                        margin: 'auto',
                        padding: '25px 50px'
                    }
                }} 
            >
                <h4 className='text-info'>{title}</h4>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-2" type="text" name="name" placeholder="Your Name" value={name} onChange={handleName} required/>
                    <input className="form-control mb-2" type="email" name="email" placeholder="Email" value={email} onChange={handleEmail} required/>
                    <input className="form-control mb-2" type="tel" name="phone" pattern="[0-9]{11}" placeholder="01700000000" value={phone} onChange={handlePhone} required/>
                    <div className="row">
                        <div className="col-6">
                            <input className='form-control' type="text" name="time" value={time}/>
                        </div>
                        <div className="col-6">
                            <input className='form-control' type="text" name="date" 
                            value={date?date.toDateString():''}/>
                            
                        </div>
                    </div>
                    <br/>
                    <input className="btn btn-info form-control" type="submit" value="Send"/>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;