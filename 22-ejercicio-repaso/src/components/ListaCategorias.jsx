import React, { Component } from 'react'
import axios from 'axios';

class ListaCategorias extends Component {

    // https://api.chucknorris.io/jokes/categories


    constructor(props) {
        super(props);
        // Inicializamos el estado
        this.state = {
            categorias: [],
            propiedad: false
        }

        // propiedades están en this.props

        // console.log("constructor")
        console.log("propiedades", this.props)
    }


    componentDidMount() {
        // console.log("component did mount");
        axios.get("https://api.chucknorris.io/jokes/categories")
            .then(
                res => this.setState(
                    {
                        categorias: res.data
                    }
                )
            )
            .catch(
                err => console.log("error", err)
            )
    }

    shouldComponentUpdate(nextProps, nextState) {

        // const array = [ "uno", "dos"];
        // console.log([array, "tres"])
        // console.log([...array, "tres"])

        // const nuevoObjetoSpread = {
        //     ...nextState,
        //     nueva: "hola",
        //     propiedad: true
        // }

        // const nuevoObjetoSinSpread = {
        //     nextState, 
        //     nueva: "hola"
        // }

        // console.log("should component update",
        //     this.state, nextState, nuevoObjetoSpread, nuevoObjetoSinSpread)
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        // this.setState({
        //     categorias: ["uno", "dos", "tres"]
        // })
        // console.log("propiedades", this.props)
        // console.log("Component did update")
    }


    // Pinta las cosas
    render() {
        console.log("render", this.state);

        return (
            <div className="lista-categorias">
                <h1>{this.props.titulo}</h1>
                {
                    this.state.categorias.map(
                        categoria => 
                            <div onClick={() => this.props.cambiaCategoria(categoria)} key={categoria}>
                            {categoria}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ListaCategorias
