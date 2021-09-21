import React from 'react';
import { Route } from 'react-router';
import Home from '../pages/Home.js'
import Technologies from '../pages/Technologies.js';
import Hobby from '../pages/Hobby.js';
import Contact from '../pages/Contact.js';

const Page = () => {
    return ( 
        <>
            <Route exact path="/" component={Home} />
            <Route path="/technologies" component={Technologies} />
            <Route path="/hobby" component={Hobby} />
            <Route path="/contact" component={Contact} />
        </>
     );
}
 
export default Page;