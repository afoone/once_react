import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'

const TaskForm = props => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("")


    const onSubmit = (e) => {
        console.log("submit",e )
        props.dispatch(addTask(task, description))
    }

    return (
        <div>
            Titulo
            <input type="text" value={task} onChange={
                e => setTask(e.target.value)
            }></input>
            Description
             <input type="text" value={description} onChange={
                e => setDescription(e.target.value)
            }></input>
            <button onClick={onSubmit}>Añadir</button>
        </div>
    )
}

function mapStateToProps(state){
    return {}
}



export default connect(mapStateToProps)(TaskForm)
