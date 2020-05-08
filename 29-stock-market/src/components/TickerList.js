import React, { Component } from 'react'
import Ticker from './Ticker'

export class TickerList extends Component {

    // Tener un array (un objeto de javascript) para llamarlo desde aquí. 
    // array.map para mostrar todos los tickets usando el componente Ticker 

    //*** hacerlo con un backend */
    // 1. Levantar el backend; json-server --watch db.json --port 4000
    // 2. Para recuperar los datos hay que usar axios
    // ¿Donde usamos axios? El problema de axios es que devuelve una promesa
    // Para tener los datos necesitamos el estado para que cuando cambie
    // lo repinte
    // axios solemos usarlo en el componentdidmount
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
            tickers : []
        }

    }



    componentDidMount() {
        // irnos a por los datos
        // axios.get this.setState(tickers: res.data)

        // json-server 

        // https://github.com/typicode/json-server
    
    }


    render() {


        const tickers = [
            {
                code: "TEL",
                name: "Telefónica",
                price: 9.99,
                prevPrice: 8.78
            },
            {
                code: "GAS",
                name: "Naturgy",
                price: 10.99,
                prevPrice: 18.78
            },
            {
                code: "UME",
                name: "Umeme",
                price: 7.69,
                prevPrice: 8.15
            },
            {
                code: "OPI",
                name: "Opinno",
                price: 7.99,
                prevPrice: 4.78
            },

        ]


        return (
            <div>
                
                {
                    // [
                    //     tickers.map
                    // ]
                    <Ticker valor={tickers[0]}></Ticker>
                }
                
            </div>
        )
    }
}

export default TickerList
