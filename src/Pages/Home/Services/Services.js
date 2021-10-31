import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
        useEffect(() => {

            fetch('https://spooky-shadow-14109.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

        })

    return (
        <div id="services">

            <h2 className='text-danger my-5'>Services</h2>

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