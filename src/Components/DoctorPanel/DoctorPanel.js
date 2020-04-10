import React from 'react';
import './DoctorPanel.css';
import{ 
    BrowserRouter as Router, 
    Switch, 
    Route 
} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AppointList from '../AppointList/AppointList';
import Sidebar from '../Sidebar/Sidebar';
import App from '../../App';


const DoctorPanel = () => {
    return (
        <div className='doctorPanel'>
            <Router>
                <Sidebar></Sidebar>
                <Switch>
                    <Route path='/doctorPanel/dashboard'>
                        <Dashboard></Dashboard>
                    </Route>
                    <Route path='/doctorPanel/appointList'>
                        <AppointList></AppointList>
                    </Route>
                    <Route exact path='/doctorPanel'>
                        <Dashboard></Dashboard>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default DoctorPanel;