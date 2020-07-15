import React from 'react'
import {useParams} from 'react-router-dom'
import projects from '../data/projects'
import '../css/ProjectDescription.css'
function ProjectDescription(){
        
    
        let { name } = useParams();
        return (
            <center><div className="project-description-container">
                
                <h2 className="project-name">{projects[name].name}</h2>
                <hr />
                <img className="project-image" src={projects[name].img}/>
                <div className="description">
                <h3>Description</h3>
                {projects[name].desc}
                </div>
                <ul className="skills"><h3>Skills</h3>
                    {projects[name].skills.map((e,index)=>{
                        return <li className="skill-item" key={index}>{e}</li>
                    })}
                </ul>
            </div>
            </center>
        )
    
}

export default ProjectDescription