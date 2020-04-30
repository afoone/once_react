import React, { Component } from 'react'
import { BASE_API_URL } from '../config/config'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export class ClientForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            description: "",
            redirect: false
        }
    }

    componentDidMount() {
        // me traigo el proyecto si tengo un id, si es undefined no hago 
        // nada
        if (this.props.id) {
            axios.get(`${BASE_API_URL}/clients/${this.props.id}`).then(
                res => {
                    this.setState(
                        {
                            description: res.data.description,
                        }
                    )
                }
            )
        }
    }


    onDescriptionChange = e => {
        this.setState(
            {
                description: e.target.value
            }
        )
    }

    onSubmitClick = e => {
        e.preventDefault();
        const client = {
            description: this.state.description,
        }
        if (this.props.id) {
            axios.put(`${BASE_API_URL}/clients/${this.props.id}`, 
                client).then(
                res =>
                    this.setState({
                        redirect: true
                    })
            ).catch(console.log)
        } else {
            axios.post(`${BASE_API_URL}/clients`, client).then(
                res =>
                    this.setState({
                        redirect: true
                    })
            ).catch(console.log)
        }
    }


    render() {
        return (
            <div className="client-form">
                {this.state.redirect && <Redirect to="/clients" />}
                <form className="ui form" >
                     <div className="field">
                        <label>Descripción</label>
                        <input type="text" name="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            placeholder="Descripción" />
                    </div>

                    <Link to="/clients/" className="ui red button">
                        <i className="icon close"></i>
                        Cancelar
                </Link>
                    <button className="ui primary button" 
                        onClick={this.onSubmitClick}
                        type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default ClientForm
