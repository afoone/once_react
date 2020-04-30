import React, { Component } from 'react'

export class FiltroProvincias extends Component {



    componentDidMount() {
        // axios
        // me tengo que traer las provincias
    }

    onProvinciasChange () {
        // cuando cambie la provincia:
        // axios tiene que ir a por los municios de esa provincia


    }


    render() {
        return (
            <div>
              <div>
               Provincias:
               <select onChange={console.log}>
                   <option value={1}>Valencia</option>
               </select>
               </div> 
               <div>
               Municipios:
               <select>
                   <option value={1}>Segorbe</option>
               </select>
               </div>
            </div>
        )
    }
}

export default FiltroProvincias
