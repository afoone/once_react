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


            Promise.all(
                [
                    db.collection("projects").get(),
                    db.collection("clients").get()
                ]
            ).then(
                res => {
                    console.log(res)
                    const [proyectos, clientes] = res;
                    const elementos = proyectos.docs.map(
                        item => {
                            const data = item.data();
                            return {
                                id: item.id,
                                code: data.code,
                                client: clientes.docs.filter(
                                    c => c.id === data.client
                                )[0].data().description,
                                description: data.description
                            }
                        }
                    )
                    setProjects(elementos);
                }
            )

        }, []
    )

    const deleteElement = (id) => {
        console.log("delete element")
        const nuevosProyectos = projects.filter(
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
