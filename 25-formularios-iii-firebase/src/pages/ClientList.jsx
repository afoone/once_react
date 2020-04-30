import React, { useEffect, useState } from 'react'
import ClientsTable from '../components/ClientsTable'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '../config/config'
import Header from '../components/Header'

const ClientList = () => {

    const [clients, setClients] = useState([])

    // Hook de efecto
    useEffect(
        () => {
            axios.get(`${BASE_API_URL}/clients`).then(
                res => setClients(res.data)
            ).catch(
                console.log
            )
        }, []
    )

    const deleteElement = (id) => {
        const nuevosClientes = clients.filter(
            e => e.id !== id);
        setClients(nuevosClientes);

    }

    return (
        <div className="clients-list">

            <Header>
                <i aria-hidden="true" className="list icon"></i>
                    Lista de Clientes ({clients.length} Clientes)
                </Header>

            <Link to="/clients/new" className="ui basic button">
                <i className="icon plus"></i>
                        Nuevo Cliente
                </Link>


            <ClientsTable deleteElement={deleteElement}
                items={clients} />
        </div>
    )
}

export default ClientList
