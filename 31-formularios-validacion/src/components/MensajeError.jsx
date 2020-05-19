import React from 'react'


const MensajeError = (props) => {

    if (!props.mensaje) {
        return null;
    }

    return (
        <div className="ui negative message">
            <div className="header">
                {props.mensaje}
            </div>
        </div>
    )
}

export default MensajeError