import React, { Component } from 'react'
import Hijo from './Hijo'

export class Padre extends Component {



    constructor(props){
        super(props);
        this.state = {
            datos: [
                1,2,3,4
            ]
        }
    }


    render() {
        
        return (
            <div>
                <Hijo datos={this.state.datos}></Hijo>
                <button onClick={()=>this.setState(
                    {
                        datos: [...this.state.datos, 6]
                    }
                )}>a</button>
            </div>
        )
    }
}

export default Padre
