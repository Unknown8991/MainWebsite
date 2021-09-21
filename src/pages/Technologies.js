import React from 'react';
import TechWrapper from '../components/TechWrapper';
import TechTitle from '../components/TechTitle';


class Technologies extends React.Component {

    render() { 
        return (
            <>

            <div className="mobile-wrapper">
                <TechTitle/>
                <TechWrapper/>
            </div>
            </>
        );
    }
}
 
export default Technologies;