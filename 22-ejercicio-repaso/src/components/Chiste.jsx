import React, { Component } from 'react'
import axios from 'axios'

export class Chiste extends Component {


    constructor(props) {
        super(props);
        this.state = {
            chiste: "Cargando..."
        }
        // console.log("constructor chiste")
    }



    recuperaChiste = () => {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${this.props.categoria}`)
            .then(
                res => this.setState(
                    {
                        chiste: res.data.value
                    }
                )
            )
            .catch(
                console.error
            )
    }

    componentDidMount() {
        //  console.log("component did mount chiste");

        if (this.props.categoria.length < 1) {
            this.setState(
                {
                    chiste: "Selecciona una categoría"
                }
            )
        } else {
            this.recuperaChiste()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("chiste did update", this.state.chiste)
        console.log("propiedades", this.props, prevProps)
        // if (this.props.categoria !== prevProps.categoria) {
        //     this.recuperaChiste();
        // }
        if (this.state.chiste === prevState.chiste) {
            this.recuperaChiste();
        }
    }

    render() {
        // console.log("render chiste")
        return (
            <div className="chiste">
                {this.state.chiste}
            </div>
        )
    }
}

export default Chiste
