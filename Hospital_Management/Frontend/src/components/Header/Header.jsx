import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
      <div className="Header">
        <div className="Header-contents">
            <h2 >We care</h2>
            <h2>about your health</h2>
            <p>Good health is the state if mental ,physical and social well being and it does not just mean absence of disease</p>
            <Link to={"/BookAppointment"}><button>Book an Appointment</button></Link>
        </div>  
      </div>
    )
}

export default Header