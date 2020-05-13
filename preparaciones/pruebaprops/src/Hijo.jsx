import React, { Component } from 'react'
import Nieto from './Nieto'

export class Hijo extends Component {



    constructor(props) {
        super(props);
        console.log(props)
        console.log(this.props)
        this.state={
            datos: this.props.datos
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.datos !== this.props.datos) {
            this.setState({
                datos: this.props.datos
            })
        }
    }

    render() {
        return (
            <div>
                <Nieto datos = {this.props.datos}></Nieto>
            </div>
        )
    }
}

export default Hijo
