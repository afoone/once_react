import React from 'react'

const ProjectCard = props => {

    console.log("project card", props)
    return (
        <div class="ui card">
            <div class="content">
                <a class="header" href="./#">{props.item.code}</a>
                <div class="meta">
                    <span class="date">{props.item.client}</span>
                </div>
                <div class="description">
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
