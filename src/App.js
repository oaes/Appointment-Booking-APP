import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import DoctorPanel from './Components/DoctorPanel/DoctorPanel';
import Appointment from './Components/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard';
import AppointList from './Components/AppointList/AppointList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="doctorPanel/dashboard">
            <Dashboard />
          </Route>
          <Route path="/doctorPanel/appointList">
            <AppointList></AppointList>
          </Route>
          <Route path="/doctorPanel">
            <DoctorPanel></DoctorPanel>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route export path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
