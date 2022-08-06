import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-danger'>About Us</h1>
            <div className="col-lg-8 col-md-6 col-sm-12">
                        <img width="100%" src='https://s1.1zoom.me/big0/374/Fast_food_Pizza_Tomatoes_499568.jpg' alt="" />
            </div>
                    
            <div className="col-lg-12 col-md-6 col-sm-12">

                        <p className="fs-3">Here you will find the best delivery for Pizza service around the world. We make sure our employees are well trained in their respective field and make sure our customers get proper services.</p>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                        <h2 className='my-5 text-danger'>History</h2>
                        <img width="100%" src='https://www.alfaforni.com/wp-content/uploads/2018/06/the-history-of-the-pizza-margherita-1.jpg' alt="" />
                         </div>

                        <p className="fs-3 my-3">The history of pizza begins in antiquity, when various ancient cultures produced basic flatbreads with several toppings. <br /> <br />

                        A precursor of pizza was probably the focaccia, a flat bread known to the Romans as panis focacius, to which toppings were then added. Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century. <br /> <br />

                        The word pizza was first documented in A.D. 997 in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly eaten in Italy and by emigrants from there. This changed after World War II when Allied troops stationed in Italy came to enjoy</p>

            </div>
        </div>
    );
};

export default About;