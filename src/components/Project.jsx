import psp from '../images/Photo-Sharing-Portal.png'
import weather from '../images/Weather-Ap.png'
import React from 'react'
import '../css/Project.css'
import {Link} from 'react-router-dom'
class Project extends React.Component{
    
    render(){
        return (
                
                <div className="grid-container">
                    <div className="grid-item">
                        <Link to='/psp'><img alt="Photos Sharing Portal" src={psp}/></Link>
                    </div>
                    <div className="grid-item">
                    <Link to='/weather'><img alt="Weather App" src={weather}/></Link>
                    </div>
                    <div className="grid-item">
                        Iteam 3
                    </div>
                    <div className="grid-item">
                        Item 4
                    </div>
            </div>
            
        )
    }
}

export default Project