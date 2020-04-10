import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const AllAppointmentRow = (props) => {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [prescription, setPrescription] = useState(props.data.prescription)

    const handlePrescription = (e) => {
        console.log(prescription)
        fetch('https://doctorsbackend.herokuapp.com/updatePrescription', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.data._id,
                prescription
            })
        }).then(res => res.json())
        setModalIsOpen(false)
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {props.data.appointmentDate}
            </TableCell>
            <TableCell align="right">{props.data.startTime}</TableCell>
            <TableCell align="right">{props.data.name}</TableCell>
            <TableCell align="right">{props.data.phone}</TableCell>
            <TableCell align="right">
                {
                    prescription?<button
                        onClick={()=>setModalIsOpen(true)} 
                        className='btn btn-info'>
                            View
                        </button>:<button 
                        onClick={()=>setModalIsOpen(true)}
                        className="btn btn-secondary">
                            Add Now
                        </button>
                }
            </TableCell>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={()=>setModalIsOpen(false)} 
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
                <h5 className='text-info'>Prescription</h5>
                <form onSubmit={handlePrescription}>
                    <textarea 
                        name="prescription"
                        value={prescription}
                        onChange={e => setPrescription(e.target.value)}
                        cols="52" rows="8" 
                        required/>
                    <br/>
                    <input className='form-control btn btn-info' type="submit" value="Enter"/>
                </form>
            </Modal>
        </TableRow>
    );
};

export default AllAppointmentRow;