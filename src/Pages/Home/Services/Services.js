import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'



/* https://ibb.co/4jkfssK
https://ibb.co/3R5qj1p
https://ibb.co/TP965L4
https://ibb.co/KDTpFv5

const services = [

    {name: 'Replace Tire', price: 2000, time: 2, img: 'https://ibb.co/6NLDW9H'},
    {name: 'Replace Tire', price: 2000, time: 2, img: 'https://ibb.co/4jkfssK'},

] */




const Services = () => {

    const [services, setServices] = useState([])
        useEffect(() => {

            fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

        })

    return (
        <div id="services">

            <h2 className='text-primary mt-5'>Our Services</h2>

        <div className='service_container'>
            
            {
    
                services.map(service =><Service
                
                    key={service.id}
                    service = {service}
    
                ></Service>)
    
            }
    
            </div>

        </div>
    );
};

export default Services;