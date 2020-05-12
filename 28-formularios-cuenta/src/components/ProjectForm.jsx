import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import db from '../config/firebase';

export class ProjectForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            code: "",
            description: "",
            client: "",
            redirect: false,
            clients: []
        }
        console.log("project form id ", props.id)
    }

    componentDidMount() {


        const promiseArray = [
            db.collection("clients").get(),
        ]

        if (this.props.id) {
            promiseArray.push(
                db.collection("projects").doc(this.props.id).get())
        }

        Promise.all(promiseArray).then(
            res => {

                if (this.props.id) {
                    this.setState({
                        clients: res[0].docs.map(
                            cliente => {
                                return {
                                    ...cliente.data(),
                                    id: cliente.id
                                }
                            }),
                        ...res[1].data()
                    })

                } else {
                    this.setState({
                        clients: res[0].docs.map(
                            cliente => {
                                return {
                                    ...cliente.data(),
                                    id: cliente.id
                                }
                            }),
                        client: res[0].docs[0].id,
                    })
                }
            }
        )
    }

    onClientChange = e => {
        this.setState(
            {
                client: e.target.value
            }
        )
    }

    onDescriptionChange = e => {
        this.setState(
            {
                description: e.target.value
            }
        )
    }

    onCodeChange = e => {
        this.setState(
            {
                code: e.target.value
            }
        )
    }

    onSubmitClick = e => {
        e.preventDefault();
        const project = {
            code: this.state.code,
            description: this.state.description,
            client: this.state.client
        }
        if (this.props.id) {
            db.collection("projects").doc(this.props.id).set(
                project
            ).then(
                res =>
                    this.setState({
                        redirect: true
                    })
            )
        } else {
            db.collection("projects").add(project).then(
                res =>
                    this.setState({
                        redirect: true
                    })
            )
        }
        console.log(project)
    }


    render() {
        return (
            <div className="project-form">
                {/* {this.state.redirect ? <Redirect to="/projects" /> : null} */}
                {this.state.redirect && <Redirect to="/projects" />}
                <form className="ui form" >
                    <div className="field">
                        <label>Ćodigo de proyecto</label>
                        <input type="text" name="code"
                            onChange={this.onCodeChange}
                            value={this.state.code}
                            placeholder="Código de proyecto" />
                    </div>
                    <div className="field">
                        <label>Descripción</label>
                        <input type="text" name="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            placeholder="Descripción" />
                    </div>
                    <div className="field">
                        <label>Cliente</label>
                        <select value={this.state.client}
                            onChange={this.onClientChange} >
                            {
                                this.state.clients.map(
                                    item => <option value={item.id}>
                                        {item.description}
                                    </option>
                                )
                            }

                        </select>
                    </div>

                    <Link to="/projects/" className="ui red button">
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

export default ProjectForm
