import React from 'react';
import '../styles/Home.scss'

import BannerTitle from '../components/BannerTitle';
import BannerText from '../components/BannerText';



class Home extends React.Component {
 
    render() { 
        return <>

                <div className="container col-12 main-banner" >
                    <div className="col-md-6">
                        <BannerTitle/>
                    </div>
                    <div className="col-md-6">
                        <BannerText/>
                    </div>
                </div>
        </>;
    }
}
 
export default Home;