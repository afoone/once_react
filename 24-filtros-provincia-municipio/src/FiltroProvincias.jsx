import React, { Component } from 'react'
import axios from 'axios';

export class FiltroProvincias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            provincias: [],
            municipios: [],
            provincia: "-1",
            municipio: ""
        }
    }


    componentDidMount() {
        // axios
        // me tengo que traer las provincias
        axios.get("http://localhost:4000/provincias").then(
            res => this.setState({
                provincias: res.data
            })
        ).catch(
            console.log
        )
    }

    onProvinciasChange = (e) => {
        // cuando cambie la provincia:

        const provinciaSeleccionada = e.target.value;
        this.setState({
            provincia: provinciaSeleccionada
        })

        // axios tiene que ir a por los municios de esa provincia

        if (provinciaSeleccionada === "-1") {
            this.setState({
                provincias: []
            })
        } else {
            axios.get(`http://localhost:4000/municipios?provincia=${provinciaSeleccionada}`).then(
                res => this.setState({
                    municipios: res.data,
                    municipio: res.data.length > 0 ? res.data[0].id : "-1"

                })
            )
        }

        console.log(this.state.provincia);

    }

    onMunicipiosChange = (e) => {
        this.setState({
            municipio: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div>
                    Provincias:
                    <select onChange={this.onProvinciasChange} value={this.state.provincia}>
                        <option value={-1}>Selecciona una provincia...</option>
                        {
                            this.state.provincias.map(
                                e => <option key={e.id} value={e.id}> {e.nombre}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    Municipios:
               <select onChange={this.onMunicipiosChange} value={this.state.municipio}>
                        {
                            this.state.municipios.map(
                                e => <option key={`municipio${e.id}`} value={e.id}>
                                    {e.nombre}</option>
                            )
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default FiltroProvincias
