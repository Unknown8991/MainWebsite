import React from 'react';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg'

class DarkMode extends React.Component {
    state = {
        darkMode: false,
    }
    handleChangeDarkMode = () =>{
        this.setState({
            darkMode: !this.state.darkMode,
        })


        const darkBody = document.getElementById('darkBody')
        const darkColorfulText = document.getElementById('darkColorfulText')
        console.log(darkBody)
        if(this.state.darkMode){
            darkBody.classList.remove('dark')
            if(darkColorfulText !== null){
                darkColorfulText.classList.remove('colorful-darkmode-banner')

            }


        }else if(!this.state.darkMode){
            darkBody.classList.add('dark')
            if(darkColorfulText !== null){

                darkColorfulText.classList.add('colorful-darkmode-banner')
            }


        }
    }
    
    render() { 
        return (
            <div className={this.state.darkMode ? "dark-mode-active" : "dark-mode"}>
                <div className="switch-ball" onClick={this.handleChangeDarkMode}>
                {this.state.darkMode ? <img className="icon-darkMode" src={sun} alt="" /> : <img className="icon-darkMode" src={moon} alt="" /> }
                </div>
            </div>
        )
    }
}
 
export default DarkMode;