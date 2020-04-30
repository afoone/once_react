import React, { Component } from 'react'

export class FiltroProvincias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            provincias: [],
            municipios: [],
            provincia: '',

        }
    }


    componentDidMount() {
        // axios
        // me tengo que traer las provincias
    }

    onProvinciasChange = (e) => {
        // cuando cambie la provincia:

        const provinciaSeleccionada = e.target.value;
        console.log(provinciaSeleccionada);

        // axios tiene que ir a por los municios de esa provincia

        // ejemplo: http://localhost:4000/municipios?provincia=3
        // this.setState({
        //     provincia: provinciaSeleccionada
        // })
        axios.get(`....${provinciaSeleccionada}`).then( res => 
            this.setState({
                provincia: provinciaSeleccionada,
                municipios: res.data
            })
        )
        console.log(this.state.provincia);

    }


    render() {
        return (
            <div>
                <div>
                    Provincias:
               <select onChange={this.onProvinciasChange} value={this.state.provinvia}>
                        <option value={1}>Valencia</option>
                        <option value={2}>Otro</option>
                    </select>
                </div>
                <div>
                    Municipios:
               <select>
                        <option value={1}>Segorbe</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default FiltroProvincias
