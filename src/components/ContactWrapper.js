import React from 'react';

import '../styles/Contact.scss'

class ContactWrapper extends React.Component {
    render() { 
        return <div className="container col-12 contact-wrapper">
            <div className="contact-wrapper__title">Contact</div>
            <div className="contact-wrapper__answer">Chesz ze mną współpracować?</div>
            <div className="contact-wrapper__mail ">Napisz do mnie
            <div className="contact-wrapper__mail contact-wrapper__mail--text">
            rafalpat98@gmail.com
            </div>
            </div>

        </div>;
    }
}
 
export default ContactWrapper;