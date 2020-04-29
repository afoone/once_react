import React, { Component } from 'react'

export class Page extends Component {

    // Iniciar el estado
    // podemos iniciarlo con "light"


    // función de onbuttonclick

    render() {
        console.log("render")
        return (
            // el classname de la página tiene que venir del estado
            <div className="page">
                <div>
                     {/* el estado cambiará en onclick */}
                    <button>light</button>
                    <button>dark</button>
                    <button>alto contraste</button>
                </div>
                <h1>titulo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla unde ea delectus pariatur corrupti adipisci dolorem dolore eos, id doloribus alias facilis sint perferendis necessitatibus odio commodi harum quia!</p>
            </div>
        )
    }
}

export default Page
