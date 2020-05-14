import axios from 'axios';

export const TASK_ADD_SUCCEED = "ADD_TASK";
export const TASK_FETCH_SUCCEED = "FETCH_TASKS_SUCCEED"

export const addTaskSucceed = (task) => {
    return {
        type: TASK_ADD_SUCCEED,
        payload: task
    }
}

export const addTask = (title, description)  => {
    return dispatch => {
        axios.post("http://localhost:4000/tasks", {
            title,
            description,
            state: "Ready"
        }).then(
            res => dispatch(addTaskSucceed(res.data))
        )
    }
}

export const fetchTaskSucceed = tasks => {
    return {
        type: TASK_FETCH_SUCCEED,
        payload: {
            tasks: tasks
        }
    }
}

export const fetchTasks = () => {
    return dispatch => {
        axios.get("http://localhost:4000/tasks").then(
            res => {
                dispatch(fetchTaskSucceed(res.data))
            }
        )
    }
}

