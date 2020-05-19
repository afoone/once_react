import React, { Component } from 'react'
import axios from 'axios'
import MensajeError from './MensajeError';

export class ClientForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellidos: "",
            edad: "",
            terminos: false,

            nombreError: null,
            apellidosError: null,
            edadError: null,
            terminosError: null
        }
    }

    validate = () => {
        // Validar todo el formulario
        // devolverá true si es válido y false si no lo es

        let nombreError = null;
        let apellidosError = null;
        let edadError = null;
        let terminosError = null;

        // El nombre es obligatorio
        if (this.state.nombre.length < 1) {
            nombreError = "El nombre es obligatorio"
        }

        // Los apellidos son obligatorios
        if (this.state.apellidos.length < 1) {
            apellidosError = "Los apellidos son obligatorios"
        }

        // La edad es obligatoria y ha de ser un número
        if (this.state.edad.length < 1) {
            edadError = "La edad es obligatoria"
        } else {
            if (!parseInt(this.state.edad)) {
                edadError = "La edad tiene que ser un número entero"
            }
        }

        if (!this.state.terminos) {
            terminosError = "Ha de aceptar los términos y condiciones"
        }

        // Escribiremos los errores en pantalla
        this.setState({
            nombreError,
            apellidosError, 
            edadError, 
            terminosError
        })

        return !nombreError && !apellidosError && !edadError && !terminosError;
    }

    onSubmit = (e) => {
        // Hacemos que no haga el post de html
        e.preventDefault();

        if (!this.validate())
            return;

        const { nombre, apellidos, edad } = this.state;
        const cliente = {
            nombre,
            apellidos,
            edad
        }
        axios.post("http://localhost:4000/clientes", cliente).then(
            res => {
                console.log("Se ha grabado correctamente");
                this.setState(
                    {
                        nombre: "",
                        apellidos: "",
                        edad: "",
                        terminos: false,
                    }
                )
            }

        )

    }

    onNombreChange = (e) => {
        this.setState(
            {
                nombre: e.target.value
            }
        )
    }

    onInputChange = (e) => {
        console.log("input changed")
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }


    onTerminosChange = (e) => {
        console.log("terminos changed", e.target);
        this.setState(
            {
                terminos: e.target.checked
            }
        )
    }

    render() {
        return (
            <div className="client-form">
                <form className="ui form">
                    <div className={this.state.nombreError? "field error": "field"}>
                        <label>Nombre</label>
                        <input type="text" name="nombre"
                            placeholder="Nombre" value={this.state.nombre}
                            onChange={this.onNombreChange} />
                        <MensajeError mensaje={this.state.nombreError}></MensajeError>
                    </div>
                    <div className="field">
                        <label>Apellidos</label>
                        <input type="text" name="apellidos" placeholder="Apellidos"
                            value={this.state.apellidos}
                            onChange={this.onInputChange} />
                        <MensajeError mensaje={this.state.apellidosError}></MensajeError>
                    </div>
                    <div className="field">
                        <label>Edad</label>
                        <input type="text" name="edad" placeholder="Edad"
                            value={this.state.edad}
                            onChange={this.onInputChange} />
                        <MensajeError mensaje={this.state.edadError}></MensajeError>
                    </div>
                    <div className="field">
                        <div className="ui checkbox" >
                            <input type="checkbox"
                                tabIndex="0"
                                name="terminos"
                                checked={this.state.terminos}
                                onChange={this.onTerminosChange}
                            />
                            <label>Estoy de acuerdo con los términos y condiciones</label>
                            <MensajeError mensaje={this.state.terminosError}></MensajeError>
                        </div>
                    </div>
                    <button className="ui button"
                        type="submit"
                        onClick={this.onSubmit}>Enviar</button>
                </form>
            </div>
        )
    }
}

export default ClientForm
