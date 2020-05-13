import React from 'react'

const Task = props => {
    return (
        <div className="task" style={{border: "1px solid blue"}}>
            <div className="task-header">
                {props.task.title}
            </div>
            <p>
                {props.task.description}
            </p>
            <p>
                {props.task.state}
            </p>
        </div>
    )
}

export default Task
