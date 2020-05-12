import React from 'react'
import './ProjectChargeTable.css'
import { CHARGE_TYPE_EXPENSE, CHARGE_TYPE_INCOME } from '../config/config';




const ChargeElement = props => {
    return (
        <div className="charge-element">
            {props.value.type === CHARGE_TYPE_EXPENSE ?
                <button onClick={()=> props.toggleCharge(props.value.id)}>
                    A ingreso
            </button> : null
            }
            <span>
                {/* {props.value.date} */}
            </span>
            <span>
                {props.value.subject}
            </span>
            {props.value.type === CHARGE_TYPE_INCOME ?
                <button style={{ float: "right" }} onClick={()=> props.toggleCharge(props.value.id)} >
                    A gasto
            </button> : null}
            <span style={{ float: "right" }}>
                {props.value.amount} €
            </span>

        </div>
    )
}



const ProjectChargeTable = props => {
    const charges = props.items;
    return (
        <>
            <div className="project-chart-table">
                <h1>Contabilidad del proyecto</h1>
                <div className="table-container">
                    <div className="left">
                        <h2>Ingresos</h2>
                        {
                            charges.filter(
                                i => i.type === CHARGE_TYPE_INCOME
                            ).map(
                                i => <ChargeElement
                                    toggleCharge={props.toggleCharge}
                                    value={i} />
                            )
                        }
                    </div>
                    <div className="right">
                        <h2>Gastos</h2>
                        {
                            charges.filter(
                                i => i.type === CHARGE_TYPE_EXPENSE
                            ).map(
                                i => <ChargeElement
                                    toggleCharge={props.toggleCharge}
                                    value={i} />
                            )
                        }
                    </div>
                </div>

            </div>
            <h2>Saldo: {charges.reduce(
                (acc, actual) => actual.type ===
                    CHARGE_TYPE_EXPENSE ? acc - actual.amount : acc + actual.amount
                , 0)}</h2></>
    )
}

export default ProjectChargeTable
