import React, { Component } from 'react'
import ListaCategorias from './ListaCategorias'
import './ChuckNorrisJokes.css'
import Chiste from './Chiste'

export class ChuckNorrisJokes extends Component {


    constructor(props){
        super(props);
        this.state = {
            categoria: ""
        }
        this.cambiaCategoria = this.cambiaCategoria.bind(this);
    }

    cambiaCategoria = function(categoria) {
        this.setState (
            {
                categoria
            }
        )
    }


    render() {
        const title = "Categorías"
       
        return (
            <div className="chuck-norris-jokes">
                <ListaCategorias
                    titulo={title} cambiaCategoria={this.cambiaCategoria}
                />
                <Chiste categoria={this.state.categoria} />
            </div>
        )
    }
}

export default ChuckNorrisJokes
