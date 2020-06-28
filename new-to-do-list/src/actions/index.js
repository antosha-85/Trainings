const addTask = task => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

const deleteTask = taskId => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    }
}

export {addTask, deleteTask}