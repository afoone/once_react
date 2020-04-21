import React, { Component } from 'react'
import axios from 'axios'
import './Fotos.css'

export class Fotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fotos: [],
          //  pagina: 
        }
    }


    componentDidMount() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=coronavirus&client_id=ap9CjpGv1KQL1_NUBugcP7F1JuMxCSDt9SeyPL9hGSc&client_secret=wujp4hUZplKTxdMIeeCzj8r0IUtKWgKmfRY-QJIU7SU").then(
            res => this.setState(
                {
                    fotos: res.data.results
                }
            )

        )
    }


    render() {
        console.log(this.state.fotos)
        return (
            <>
                <div className="fotos">
                    {
                        this.state.fotos.map(
                            e => {
                                const apaisada = e.height < e.width;
                                const estilo = {
                                    gridColumn: `span ${apaisada?2:1}`
                                }
                                return <img alt={e.alt_description} key={e.id} src={e.urls.small} style={estilo}></img>
                            }
                        )
                    }
                </div>
                <button>Más</button>
            </>
        )
    }
}

export default Fotos
