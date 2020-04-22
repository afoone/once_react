import React, { Component } from 'react'
import Fotos from './Fotos'
import Search from './Search'
import ModalImage from './ModalImage'

export class FotosFiltradas extends Component {


    constructor(props){
        super(props);
        this.state= {
            filtro: ""
        }
    }

    filtra = (nuevoFiltro)  => {
        this.setState({
            filtro: nuevoFiltro
        });
    }



    render() {
        return (
            <div className="fotos-filtradas">
                <ModalImage></ModalImage>
                <Search changeSearch={this.filtra}/>
                <Fotos filtro={this.state.filtro}/>
            </div>
        )
    }
}

export default FotosFiltradas
