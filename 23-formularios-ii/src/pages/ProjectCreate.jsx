import React, { Component } from 'react'
import ProjectForm from '../components/ProjectForm'
import Header from '../components/Header'

export class ProjectCreate extends Component {
    render() {
        return (
            <div className="project-create">
                <Header>
                    <i aria-hidden="true" class="plus icon"></i>
                    Crear Proyecto
                </Header>
                <ProjectForm/>
            </div>
        )
    }
}

export default ProjectCreate
