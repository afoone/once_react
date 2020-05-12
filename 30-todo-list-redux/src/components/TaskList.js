import React, {useState, useEffect} from 'react'
import Task from './Task'
import {connect} from 'react-redux'

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
