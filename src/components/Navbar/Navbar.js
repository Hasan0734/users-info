import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = (props) => {
    const cart = props.cart
    return (
        <div className = "navbar-container">
            <div className="navbar">
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/added-users">Added Users</a>
               <button className="added-friend"><FontAwesomeIcon icon = {faCartPlus} /> {cart.length}</button>
            </div>

        </div>


    );
};

export default Navbar;