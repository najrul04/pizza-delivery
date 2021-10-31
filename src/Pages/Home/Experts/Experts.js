import React from 'react';

import deliveryMan1 from '../../../images/deliverymen/deliverymen-1.jpg'
import deliveryMan2 from '../../../images/deliverymen/deliverymen-2.jpg'
import deliveryMan3 from '../../../images/deliverymen/deliverymen-3.jpg'
import deliveryMan4 from '../../../images/deliverymen/deliverymen-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: deliveryMan1,
        name: 'Steven S. Stroud',
        role: 'Delivery Man'
    },
    {
        img: deliveryMan2,
        name: 'Patrick R. Carter',
        role: 'Packaging'
    },
    {
        img: deliveryMan3,
        name: 'Antonio I. McEachern',
        role: 'Production'
    },
    {
        img: deliveryMan4,
        name: 'Luke R. McGuire',
        role: 'Driver'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h1 className='text-danger mt-5'>Delivery Men</h1>
            <div className='row'>

                {

                    experts.map(expert =><Expert
                    
                        key={expert.name}
                        expert={expert}

                    ></Expert>)

                }

            </div>
        </div>
    );
};

export default Experts;