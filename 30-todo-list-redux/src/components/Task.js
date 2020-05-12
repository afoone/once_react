import React from 'react'

const Task = props => {
    return (
        <div className="task">
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
