import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'
const User = (props) => {
   const {img, name, phone, email,  company, profession, address, annualSalary} = props.user;
   const {street, suit, city, zipcode} = address;
    return (
       
            <div className="user-info">
                    <img src={img} alt="" />
                <div className="user-detail">
                <h1>Hey, I'm <small>{name}</small></h1>
                <br />
                <div>
                    
                </div>
                <h2>{profession} on <small>{company.name}</small></h2>
                <h3>Sallary: ${annualSalary}</h3>          
                <h3>Phone: {phone}</h3>
                <h3>Email: {email}</h3>
                <p>Address: {street} {suit}, {city}, {zipcode}</p>
                <button onClick={() => props.handleAddClick(props.user)} className="add-button"><FontAwesomeIcon icon={faPlus} />Add Friend</button>
                </div>
            </div>

   
    );
};

export default User;