import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="events-area my-4">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="heading mb-3">Upcoming <span>Events</span></h1>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5">
                    <div className="col">
                        <h1>Ramadan Offer</h1>
                        <img className="w-100 mb-3" height="200px" src="https://i.pinimg.com/originals/ed/36/62/ed366207775fb6d53a9c02874c8439a6.jpg" alt="" />
                        <p>In Ramadan the delivery will be half of the its cost. Ramadan is a respectable month for muslim and for that the Pizza delivery will give 50% discount on delivery charge.</p>
                    </div>
                    <div className="col">
                        <h1>5 Min Offer</h1>
                        <img className="w-100 mb-3" height="200px" src="https://i.ytimg.com/vi/kn0C1zzhbRQ/maxresdefault.jpg" alt="" />
                        <p>The delivery can be very time consuming from time to time. So the upcoming event is coming on to be on your home in 5 min with a few extra of charge.</p>
                    </div>
                    <div className="col">
                        <h1>Late Offer</h1>
                        <img className="w-100 mb-3" src="https://blog.hdwallsource.com/wp-content/uploads/2015/12/pizza-20439-20951-hd-wallpapers.jpg" alt="" />
                        <p>If any of the order takes more time than it should then for the late and wasting your time, the customer will get a free pizza.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;