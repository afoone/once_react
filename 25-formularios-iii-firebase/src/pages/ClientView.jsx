import React, { Component } from 'react'
import ClientCard from '../components/ClientCard'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_API_URL } from '../config/config'
import { Link } from 'react-router-dom'

export class ClientView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: {}
        }
    }


    componentDidMount() {
        console.log(this.props.match)
        axios.get(`${BASE_API_URL}/clients/${this.props.match.params.id}/`)
            .then(res =>
                this.setState({
                    client: res.data
                })
            )
    }

    render() {
        return (
            <div className="client-view">
                <Header>
                    <i aria-hidden="true" className="list icon"></i>
                    Cliente {this.state.client.id}
                </Header>
                <ClientCard item={this.state.client}></ClientCard>
                <Link to="/clients" className="ui button">Volver</Link>

            </div>
        )
    }
}

export default ClientView
