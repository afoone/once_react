
import {global} from '../tasks'

const tasks = (state = global , action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                notifications: [...state.notifications, 
                    "Nueva tarea "+action.payload.title
                ]
            }
            
 
        default:
            break;
    }

    return state
}

export default tasks