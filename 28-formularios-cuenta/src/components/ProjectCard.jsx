import React from 'react'
import './ProjectCard.css'

const ProjectCard = props => {

    return (
        <div className="project-card">
            <div className="ui card">
                <div className="content">
                    <a className="header" href="./#">{props.item.code}</a>
                    <div className="meta">
                        <span className="date">{props.item.client}</span>
                    </div>
                    <div className="description">
                        {props.item.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
