import React, { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import CircularProgress from '@material-ui/core/CircularProgress';


const Services = (props) => {
    const [services, setServices] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('https://doctorsbackend.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setServices(data)
            })
    }, [])


    const openModal = (title, time, startTime) => {
        setAppointmentInfo({ title, time, startTime, date: props.date })
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }



    return (
        <div>
            <h3 className="text-info m-4">
                Available Appointments on {props.date.toLocaleDateString(undefined, options)}
            </h3>
            {isLoading && <CircularProgress className='mt-3' disableShrink>
            </CircularProgress>}
            <div className="row">
                {
                    services.map(el => <div
                        key={el._id}
                        className="col-md-4 d-flex justify-content-center">
                        <ServiceCard
                            title={el.title}
                            time={el.time}
                            startTime={el.startTime}
                            date={props.date}
                            openModal={openModal}
                        ></ServiceCard>
                    </div>)
                }
            </div>
            <AppointmentForm
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                appointmentInfo={appointmentInfo}
            ></AppointmentForm>
        </div>
    );
};

export default Services;