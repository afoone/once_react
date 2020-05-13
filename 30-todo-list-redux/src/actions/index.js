import {v1 as uuid} from 'uuid'


export const ADD_TASK = "ADD_TASK";


export const addTask = (title, description)  => {
    return {
        type: ADD_TASK,
        payload: {
            id: uuid(),
            title: title,
            description: description,
            state: "Ready"
        }
    }
}