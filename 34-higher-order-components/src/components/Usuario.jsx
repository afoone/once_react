import React from 'react'
import styles from './Usuario.module.css'

const Usuario = () => {

    const usuario = JSON.parse(
        localStorage.getItem("user"))
    return (
        <div className={styles.usuario}>
            El usuario es {usuario.nombre}
        </div>
    )
}

export default Usuario
