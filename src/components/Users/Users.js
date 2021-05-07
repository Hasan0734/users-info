import React, { useEffect, useState } from 'react';
import User from '../User/User';
import data from '../../data/data.json';
import './Users.css'
import Cart from '../Cart/Cart';
const Users = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(data)
    }, [])
  
    return (
        <div className="container">
            <div className="user-container">
                
                {
                    users.map(user => <User handleAddClick ={props.handleAddClick} user = {user} key={user.id}></User>)
                }
            </div>
            <div className="add-container">
                <Cart salary={props.salary} cart ={props.cart}></Cart>
            </div>
        </div>
    );
};

export default Users;