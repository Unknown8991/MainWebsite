import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss'
import artist from '../images/artist.svg'

import project from '../images/project-management.svg'
import contact from '../images/contact-form.svg'
import man from '../images/man.svg'


const styles = {
    navActive:{
        height: "70px",
        width: "70px",
 
    },
    novisible:{
        display: "none",
    },
    animationImg:{

    }
}
class Navigation extends React.Component {
    state = {
        isActive: false,
    }
    handleClickNav = () =>{
        this.setState({
            isActive: !this.state.isActive,
        })
    }
    render() { 
        return(
            <div>
                <div className="half-circle" style={this.state.isActive ? null : styles.navActive}>
                    <nav className="navigation col-md-12" style={this.state.isActive ? null : styles.novisible}>
                        <ul className="item-list-left col-md-6">
                            <li className="list"><NavLink exact to="/home"  ><img src={man} alt="" className="img-left" /></NavLink></li>
                            <li className="list"><NavLink to="technologies"><img src={project} alt="" className="img-left" /></NavLink></li>
                        </ul>
                        <ul className="item-list-right col-md-6">
                            <li className="list"><NavLink to="hobby"><img src={artist} alt="" className="img-right" /></NavLink></li>
                            <li className="list"><NavLink to="contact"><img src={contact} alt="" className="img-right" /></NavLink></li>
                        </ul>
                    </nav>
                </div>
                <figure className="circle" onClick={this.handleClickNav}></figure>
            </div>
        ) 
    }
}
 
export default Navigation;