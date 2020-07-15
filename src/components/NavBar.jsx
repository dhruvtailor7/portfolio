import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'
class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            
            <div className="navbar-container">
                
                <ul className="navbar-list">
                    <Link to="/"><li key="home">Home</li></Link>
                    <Link to="/projects"><li key="projects">Projects</li></Link>
                    <Link to="/contact"><li key="contact">Contact</li></Link>
                </ul>
                
            </div>
            
        )
    }
}

export default NavBar