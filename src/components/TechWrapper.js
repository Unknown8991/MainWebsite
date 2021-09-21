import React from 'react';
import '../styles/Technologies.scss'
import TechList from './TechList';

const TechWrapper = () => {
    return ( 
        <div className="container tech-wrapper col-12">
            <TechList/>
        </div>
     );
}
 
export default TechWrapper;