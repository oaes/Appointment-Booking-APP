import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import AllAppointmentTable from '../AllAppointmentTable/AllAppointmentTable';
import CounterCard from '../CounterCard/CounterCard';

const Dashboard = () => {
    const [allAppointments, setAllAppointments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://doctorsbackend.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setAllAppointments(data)
            })
    }, [])

    const getTotalApp = () => {
        const data = {
            count: allAppointments.length,
            text: 'Total Appointments',
            backgroundColor: '#5cb85c'
        }
        return data
    }

    const getTodayApp = () => {
        const date = new Date()
        const newArray = allAppointments.filter(app => {
            return app.appointmentDate === date.toDateString()
        })
        const data = {
            count: newArray.length,
            text: "Today's Appointments",
            backgroundColor: '#0275d8'
        }
        return data
    }

    const getPendingToday = () => {
        const date = new Date()
        const newArray = allAppointments.filter(app => {
            return app.appointmentDate === date.toDateString() && !app.visited
        })
        const data = {
            count: newArray.length,
            text: "Pending Appointments",
            backgroundColor: '#d9534f'
        }
        return data
    }

    const getPatient = () => {
        const patientArray = [];
        allAppointments.forEach(app => {
            if (patientArray.indexOf(app.email) === -1) {
                patientArray.push(app.email)
            }
        })
        const data = {
            count: patientArray.length,
            text: "Total Patients",
            backgroundColor: '#f0ad4e'
        }
        return data
    }

    return (
        <div className='container'>
            <h4 className="text-info mt-3 mb-1">Dashboard</h4>
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getPendingToday()}></CounterCard>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getTodayApp()}></CounterCard>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getTotalApp()}></CounterCard>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getPatient()}></CounterCard>
                </div>
            </div>
            {
                isLoading ? <CircularProgress className='mt-3' disableShrink>
                </CircularProgress> : <AllAppointmentTable allAppointments={allAppointments}>
                    </AllAppointmentTable>
            }

        </div>
    );
};

export default Dashboard;