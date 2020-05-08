import React, { Component } from 'react'
import Ticker from './Ticker'

export class TickerList extends Component {



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
