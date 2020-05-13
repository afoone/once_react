import React, {useState, useEffect} from 'react'
import Task from './Task'
import {connect} from 'react-redux'
import TaskForm from './TaskForm'

const TaskList = props => {

    useEffect(
        () => { 
            console.log("did mount");
            console.log(props);
        },
        []
    )
    
    return (
        <div className="task-list">
            <TaskForm></TaskForm>
            <hr></hr>
            {props.tasks.map(
                item=><Task task={item}/>
            )}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)
