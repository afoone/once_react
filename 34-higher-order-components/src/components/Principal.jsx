import React, { Component } from 'react'
import styles from './Principal.module.css';
import { logged, admin, checkUser, cajaVerde, adminColor } from './hoc';
import Usuario from './Usuario';
import ListaRequisitos from './ListaRequisitos';
import ListaCompra from './ListaCompra';

export class Principal extends Component {



    constructor(props) {
        super(props);
    }

    checkUser = (usuario) => {
        console.log(usuario)
        console.log(usuario && usuario.rol === "admin")
        return usuario && usuario.rol === "admin";
    }

    render() {
        console.log(adminColor("red"))
        return (
            <div className={styles.principal}>
                <h1>Principal</h1>
                {
                    logged(cajaVerde(<Usuario />))
                }
                {
                    adminColor("red")(<ListaRequisitos/>)
                    //admin(<ListaRequisitos />)
                }
                {
                    checkUser(this.checkUser, <ListaCompra />)
                }
            </div>
        )
    }
}

export default Principal
