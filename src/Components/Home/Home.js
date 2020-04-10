import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import photo from '../../Images/Mask Group 1.png';
const Home = () => {
    
    return (

        <div className='p-5 home-page'>
        <div className="row">
            <div className="col-md-6 text-left pt-5">
                <h1 className='text-info'>Your New Smile</h1>
                <h3 className='text-success'>Starts Here</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam, soluta nesciunt molestiae natus accusamus minus exercitationem omnis animi ex eaque tenetur magni aspernatur? Nisi culpa soluta molestias unde dolor!</p>
                <Link to='/appointment'>
                    <button className="btn btn-info m-1">Get Appointment</button>
                </Link>
                <Link to='/doctorPanel'>
                    <button className="btn btn-info m-1">Doctor Panel</button>
                </Link>
            </div>
            <div className="col-md-6 pt-3">
                <img className='w-100 mt-5' src={photo} alt=""/>
            </div>
        </div>
        

    </div>
)
    };
export default Home;
