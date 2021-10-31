import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {


    const {serviceId} = useParams()
    const [service, setService] = useState({})

    useEffect(() => {

        fetch(`https://spooky-shadow-14109.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))

    }, [])

    return (
        <div>
        
            <h2 className='my-2'>Details of: {service.name}</h2>
            <h5 className='my-2'>This is Order Number: {serviceId}</h5>
            <img className='my-2' src={service.img} alt="" />
            <h3 className='my-2'>Price: ${service.price}</h3>
        </div>
    );
};

export default Booking;