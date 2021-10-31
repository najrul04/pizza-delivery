import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { _id, name, price, description, img} = service;
    return (
        <div className='service py-3'>
            
        <h2>Name: {name}</h2>
        <img src={img} alt="" />
        <h5>Price: {price}</h5>
        <p className="px-3">Description: {description}</p>
        <Link to={`/booking/${_id}`}>

        <button className='btn btn-warning'>Order {name.toLowerCase()}</button>

        </Link>

        </div>
    );
};

export default Service;