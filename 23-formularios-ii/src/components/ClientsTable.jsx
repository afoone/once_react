import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_API_URL } from '../config/config'

const ProjectsTable = (props) => {

    const onBorrarClicked = id => {
        console.log("elemento a borrar", id)
        axios.delete(`${BASE_API_URL}/clients/${id}/`).then(
            res => {
                console.log(res);
                props.deleteElement(id);
            }
        ).catch(console.log)
    }

    return (
        <div>
            <div>
                <table className="ui striped table unstackable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descripción</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.items.map(
                                e => <tr key={`project${e.id}`}>
                                    <td>{e.id}</td>
                                    <td>{e.description}</td>
                                    <td>
                                        <Link to={`/clients/${e.id}/view`}>
                                            Ver
                                            </Link> &nbsp;
                                            <Link to={`/clients/${e.id}/edit`}>
                                            Editar
                                            </Link> &nbsp;
                                            <a href="/#" onClick={() => onBorrarClicked(e.id)} >Borrar</a>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsTable

