import React, { useState } from "react";
import "./Specialization_item.css"
const Specialization_item = ({specialist_name,specialist_image,setappointment}) =>{
    return(
        <div className="Specialist-item">
            <div className="Specialist-item-img-container">
                <img className="Specialist-item-img" src={specialist_image} alt="" />
            </div>
            <div className="Specialist-item-info">
                <div className="Specialist-item-Booking">
                    <p>{specialist_name}</p>
                    <button onClick={()=>setappointment(true)}>Take the Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Specialization_item;