import React from 'react'
import { Link } from 'react-router-dom'
import db from '../config/firebase'

const ProjectsTable = (props) => {

    const onBorrarClicked = id => {
        db.collection("clients").doc(id).delete().then(
            props.deleteElement(id)
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
                                e => <tr key={`client${e.id}`}>
                                    <td>{e.id}</td>
                                    <td>{e.description}</td>
                                    <td>
                                        <Link to={`/clients/${e.id}/view`}>
                                            Ver
                                            </Link> &nbsp;
                                            <Link to={`/clients/${e.id}/edit`}>
                                            Editar
                                            </Link> &nbsp;
                                            <a href="#" onClick={() => onBorrarClicked(e.id)} >Borrar</a>
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

