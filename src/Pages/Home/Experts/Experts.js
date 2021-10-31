import React from 'react';

import employee1 from '../../../images/employee/deliverymen-1.jpg'
import employee2 from '../../../images/employee/deliverymen-2.jpg'
import employee3 from '../../../images/employee/deliverymen-3.jpg'
import employee4 from '../../../images/employee/deliverymen-4.jpg'
import employee5 from '../../../images/employee/deliverymen-5.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: employee1,
        name: 'Steven S. Stroud',
        role: 'Delivery Man'
    },
    {
        img: employee2,
        name: 'Patrick R. Carter',
        role: 'Packaging'
    },
    {
        img: employee3,
        name: 'Antonio I. McEachern',
        role: 'Production'
    },
    {
        img: employee4,
        name: 'Luke R. McGuire',
        role: 'Driver'
    },

    {
        img: employee5,
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