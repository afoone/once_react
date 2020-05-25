import React, { Component } from 'react'

export class ListaCompra extends Component {




    render() {


        const arrayReq = [
            "pan",
            "huevos"
        ]

        return (
            <div>
                <ul>
                {
                    arrayReq.map(e => <li>{e}</li>)
                }
                </ul>       
            </div>
        )
    }
}

export default ListaCompra
