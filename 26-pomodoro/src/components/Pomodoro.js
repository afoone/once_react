import React, { Component } from 'react'
import Header from './Header'

export class Pomodoro extends Component {



    constructor(props) {
        super(props);
        this.state = {
            tiempo: 1500

        }
    }

    componentDidMount() {
        setInterval(
            () => this.setState({tiempo: this.state.tiempo - 1}),
            1000
        )
    }

    render() {
        return (
            <div>
                <Header></Header>
                Pomodoro {this.state.tiempo} 
                {/* para pasar a minutos y segundos / % */}
            </div>
        )
    }
}

export default Pomodoro