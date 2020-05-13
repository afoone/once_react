import React from 'react'

const Nieto = props => {
    return (
        <div>

            {
                props.datos.map(
                    i => <div> Item {i}</div>
                )
            }

        </div>
    )
}

export default Nieto