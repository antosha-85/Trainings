import { combineReducers} from 'redux'
const taskReducer = (state=['hello'], action)=>{
    switch(action.type) {
        case 'ADD_TASK':
            state = state.concat(action.payload)
            return state
            break;
            case 'DELETE_TASK':
                state = state.slice()
                state.splice(action.payload, 1)
            break;
default:
            return state
    }
}

const reducers = combineReducers({
    task: taskReducer
})

export default reducers
// export default taskReducer