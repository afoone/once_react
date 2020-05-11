import React, { Component } from 'react'
import ProjectForm from '../components/ProjectForm'
import Header from '../components/Header'

export class ProjectCreate extends Component {


    render() {

        const id = this.props.match.params.id;

        console.log(id)

        return (
            <div className="project-create">
                <Header>
                    <i aria-hidden="true" class="plus icon"></i>
                    {id ? "Editar proyecto": "Crear Proyecto"}
                </Header>
                <ProjectForm id={id}/>
            </div>
        )
    }
}

export default ProjectCreate
