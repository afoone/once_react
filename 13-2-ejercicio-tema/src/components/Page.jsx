import React, { Component } from 'react'
import './Page.css'

export class Page extends Component {

    // Iniciar el estado
    // podemos iniciarlo con "light"
    constructor(props) {
        super(props);
        this.state = {
            tema: "light"
        }
    }


    // función de onbuttonclick
    changeTheme = (tema) => {
        this.setState({tema})
    }

    render() {
        console.log("render")
        return (
            // el classname de la página tiene que venir del estado
            <div className={`page ${this.state.tema}`}>
                <div>
                     {/* el estado cambiará en onclick */}
                    <button onClick={() => this.changeTheme("light")}>light</button>
                    <button onClick={() => this.changeTheme("dark")}>dark</button>
                    <button onClick={() => this.changeTheme("high-contrast")}>alto contraste</button>
                </div>
                <h1>titulo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla unde ea delectus pariatur corrupti adipisci dolorem dolore eos, id doloribus alias facilis sint perferendis necessitatibus odio commodi harum quia!</p>
            </div>
        )
    }
}

export default Page
