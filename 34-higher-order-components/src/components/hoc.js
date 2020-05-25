import React from 'react'
import Usuario from './Usuario'


export const devuelveUsuario = (usuario) => {
    return usuario === null ? <h4>No hay usuario</h4> : <Usuario user={usuario}></Usuario>
}

export const logged = (componente) => {
    const usuario = JSON.parse(localStorage.getItem("user"))
    return usuario === null ? null : componente
}

export const admin = (componente) => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    return usuario === null || usuario.rol !== "admin" ? null : componente
}

export const checkUser = (check, componente) => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    return check(usuario) ? componente : null
}

export const cajaVerde = (componente) => {
    return <div style={{ border: "1px solid green" }}>
        {componente}
    </div>
}

export const cajaRoja = (componente) => {
    return <div style={{ border: "1px solid red" }}>
        {componente}
    </div>
}

export const adminColor = (color) => {
    switch (color) {
        case "green":
            return (componente) => {
                return admin(
                    cajaVerde(componente)
                )
            }
        default:
            return (componente) => {
                return admin(
                    cajaRoja(componente)
                )
            }

    }
}

