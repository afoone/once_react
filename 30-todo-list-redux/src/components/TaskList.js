import React, { useEffect } from 'react'
import Task from './Task'
import { connect } from 'react-redux'
import TaskForm from './TaskForm'
import { fetchTasks } from '../actions'

const TaskList = props => {



    const { dispatch } = props;

    useEffect(
        () => {
            console.log("did mount");
            dispatch(fetchTasks())
        },
        [dispatch]
    )

    return (
        <div className="task-list">
            <TaskForm></TaskForm>
            <hr></hr>
            {props.tasks.map(
                item => <Task key={item.id} task={item} />
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
