import React, { useEffect, useState } from 'react'
import ClientsTable from '../components/ClientsTable'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import db from '../config/firebase'

const ClientList = () => {

    const [clients, setClients] = useState([])

    // Hook de efecto
    useEffect(
        () => {
            db.collection("clients").get().then(
                res => {
                    console.log(res)
                    const elementos = res.docs.map(
                        item => {
                            const data = item.data();
                            return {
                                id: item.id,
                                description: data.description,
                            }
                        }
                    )
                    setClients(elementos);
                }
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
