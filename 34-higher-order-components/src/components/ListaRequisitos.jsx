import React, { Component } from 'react'

export class ListaRequisitos extends Component {




    render() {


        const arrayReq = [
            "Levantarme pronto",
            "trabajar duro"
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

export default ListaRequisitos
