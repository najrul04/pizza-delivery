import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <Services></Services>
            <Events></Events>
            <Contact></Contact>
            {/* <Experts></Experts> */}

        </div>

    );
};

export default Home;