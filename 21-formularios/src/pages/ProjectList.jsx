import React, { Component } from 'react'
import ProjectsTable from '../components/ProjectsTable'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {BASE_API_URL} from '../config/config'


export class ProjectList extends Component {



    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_API_URL}/projects`).then(
            res =>
                this.setState({
                    projects: res.data
                })
        ).catch(
            console.log
        )
    }

    render() {
        return (
            <div className="project-list">
                <Link to="/projects/new" className="ui basic button">
                    <i className="icon plus"></i>
                        Nuevo Proyecto
                </Link>
                <ProjectsTable items={this.state.projects} />
            </div>
        )
    }
}

export default ProjectList
