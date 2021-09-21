import React from 'react';
import '../styles/Hobby.scss'
import ig1 from '../photos/ig.jpg'
import ig2 from '../photos/igb.jpg'
import ig3 from '../photos/igb2.jpg'


class HobbyWrapper extends React.Component {
    render() { 
        return <div className="container col-md-12 hobbyWrapper">
            <div className="col-md-6 hobby-box hobby-box__left ">
                <img className="photo-ig photo-ig__small" src={ig1} alt="" />
                <img className="photo-ig photo-ig__big" src={ig3} alt="" />
                <img className="photo-ig photo-ig__medium" src={ig2} alt="" />
            </div>
            <div className="col-md-6 hobby-box hobby-box__right ">
                <div className="hobby-color-text">Hobby</div>
                <div className="text-hobby ">Od najmodszych lat jestem pasjonatem sportu. Piłka nożna i freestyle football to moje ulubione dziedziny.
                    Interesuję się również branżą gier komputerowych. Na bieżąco śledzę nowinki techniczne na świecie. Staram się aktywnie spędzać czas wolny.
                </div>

            </div>
        </div>;
    }
}
 
export default HobbyWrapper;