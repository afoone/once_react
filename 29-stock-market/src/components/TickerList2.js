import React, { Component } from 'react'
import Ticker from './Ticker'
import axios from 'axios'

export class TickerList extends Component {

    // Tener un array (un objeto de javascript) para llamarlo desde aquí. 
    // array.map para mostrar todos los tickets usando el componente Ticker 

    //*** hacerlo con un backend */
    // 1. Levantar el backend; json-server --watch db.json --port 4000
    // 2. Para recuperar los datos hay que usar axios - 
    // ¿Donde usamos axios? El problema de axios es que devuelve una promesa
    // Para tener los datos necesitamos el estado para que cuando cambie
    // lo repinte
    // axios solemos usarlo en el componentdidmount -
    // 1a vez: constructor --> render --> componentDidMount
    // 2a si hay actualizaciones (this.props, this.state):
    // render --> componentDidUpdate(prevProps, prevState)

    // constructor tickers=[]
    // render [].map => no pintamos na del map
    // componentdidmount -> axios.get ().then...
    //              then( this.setState({tickers: res.data}))
    // render [todos los ticker].map( .... )
    // componentDidUpdate ( no hay nada)



    constructor(props) {
        super(props);
        this.state = {
            tickers: []
        }
    }


    // componente montado
    componentDidMount() {
        axios.get("http://localhost:4000/tickers")
            .then(
                res => this.setState({ tickers: res.data })
            ).catch(
                err => console.error("error en axios", err)
            );
    }

    // cambio ticer nos ordenara el ticker
    cambioTicker = () => {
        const elementosOrd = this.state.tickers.sort(
            (a, b) => {
                return this.state.ascendentecon ? a.price - b.price : b.price - a.price
            })

        this.setState({
            tickers: elementosOrd
        })

    }


    render() {
        // irnos a por los datos
        // axios.get this.setState(tickers: res.data)

        // json-server 

        // https://github.com/typicode/json-server

        return (
            <div className="ticker-list">
                <div>
                    <button
                        type="button"
                        onClick={() => elementosOrd(id)}
                    > Ordenar
                </button>
                </div>
                <div>
                    {
                        this.state.tickers.map(item => <Ticker
                            valor={item}
                        />)
                    }
                </div >
            </div>
        )
    }

}



export default TickerList