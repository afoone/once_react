import React from 'react'
import './Ticker.css'

const Ticker = (props) => {

    const v = props.valor;

    //v.price / v.prevPrice
    const sube = v.price > v.prevPrice;

    const clase = sube ? "sube" : "baja";

    return (
        <div className="ticker">
            <h1>{v.code}</h1>
            <h2>{v.name}</h2>
            <h3 className={clase}>{v.price}</h3> 
        </div>
    )
}

export default Ticker
