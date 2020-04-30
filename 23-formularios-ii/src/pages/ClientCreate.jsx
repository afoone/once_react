import React, { Component } from 'react'
import ClientForm from '../components/ClientForm'
import Header from '../components/Header'

export class ClientCreate extends Component {


    render() {

        const id = this.props.match.params.id;

        console.log(id)

        return (
            <div className="client-create">
                <Header>
                    <i aria-hidden="true" class="plus icon"></i>
                    {id ? "Editar Cliente": "Crear Cliente"}
                </Header>
                <ClientForm id={id}/>
            </div>
        )
    }
}

export default ClientCreate
