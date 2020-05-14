
import { global } from '../reduxInitiaState'
import { TASK_ADD_SUCCEED, TASK_FETCH_SUCCEED } from '../actions'

const tasks = (state = global, action) => {
    console.log(action);

    switch (action.type) {
        case TASK_ADD_SUCCEED:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                notifications: [...state.notifications,
                "Nueva tarea " + action.payload.title
                ]
            }
        case TASK_FETCH_SUCCEED:
            return {
                ...state,
                tasks: action.payload.tasks
            }

        default:
            break;
    }

    return state
}

export default tasks