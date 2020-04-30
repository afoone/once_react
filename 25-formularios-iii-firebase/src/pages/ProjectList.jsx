import React, { useEffect, useState } from 'react'
import ProjectsTable from '../components/ProjectsTable'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import db from '../config/firebase';

const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    // Hook de efecto
    useEffect(
        () => {
            console.log("componente montado");

            db.collection("projects").get().then(
                res => {
                    console.log(res)
                    const elementos = res.docs.map(
                        item => {
                            const data = item.data();
                            return {
                                id: item.id,
                                code: data.code,
                                client: data.client,
                                description: data.description
                            }
                        }
                    )
                    setProjects(elementos);
                }
            )


            // axios.get(`${BASE_API_URL}/projects`).then(
            //     res => setProjects(res.data)
            // ).catch(
            //     console.log
            // )
        }, []
    )

    const deleteElement = (id) => {
        console.log("delete element")
        const nuevosProyectos = this.state.projects.filter(
            e => e.id !== id);
        setProjects(nuevosProyectos);

    }

    return (
        <div className="project-list">

            <Header>
                <i aria-hidden="true" className="list icon"></i>
                    Lista de Proyectos ({} proyectos)
                </Header>

            <Link to="/projects/new" className="ui basic button">
                <i className="icon plus"></i>
                        Nuevo Proyecto
                </Link>


            <ProjectsTable deleteElement={deleteElement}
                items={projects} />
        </div>
    )
}

export default ProjectList
