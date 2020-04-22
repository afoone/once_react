import React, { Component } from 'react'
import Search from './Search'
import TablaPosts from './TablaPosts'

export class TablaFiltrada extends Component {


    constructor(props) {
        super(props);
        this.state = {
            searchPhrase : ""
        }
    }

    changeSearchPhrase = (nuevaFrase) => {
        this.setState({
            searchPhrase: nuevaFrase
        })
    }




    render() {
        return (
            <div className="tabla-filtrada">
                <Search auto changeSearch = {this.changeSearchPhrase} />
                <TablaPosts filtro={this.state.searchPhrase}></TablaPosts>
            </div>
        )
    }
}

export default TablaFiltrada
