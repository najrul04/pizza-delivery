import React, { useEffect, useState } from 'react';
import './ManageServices.css'

const ManageServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])

    const handleDelete = id => {

        const url = `http://localhost:5000/services/${id}`
        fetch(url, {

            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            if(data.deletedCount){

                alert('deleted')
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)

            }
            

        })

    }

    return (
        <div className="remove_items">
            <h1 className='text-danger mb-5'>Remove Items</h1>
            {

                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <img src={service.img} alt="" />
                    <h5 className="py-3">Price: {service.price}</h5>
                    <p className="px-3">{service.description}</p>
                    <button className='btn rounded btn-danger my-3' onClick = {() => handleDelete(service._id)}>Delete</button>
                </div> )

            }
        </div>
    );
};

export default ManageServices;