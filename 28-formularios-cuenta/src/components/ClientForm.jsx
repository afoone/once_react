import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import db from '../config/firebase';

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
            db.collection("clients").doc(this.props.id).get().then(
                res => {
                    if (res.exists) {
                        const data = res.data();
                        console.log("data", data)
                        this.setState(
                            {
                                description: data.description,
                            }
                        )
                    }
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
            db.collection("clients").doc(this.props.id).set(
                client
            ).then(
                res =>
                    this.setState({
                        redirect: true
                    })
            )
        } else {
            db.collection("clients").add(client).then(
                res =>
                    this.setState({
                        redirect: true
                    })
            )
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
