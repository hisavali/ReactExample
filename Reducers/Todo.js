
export var todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return {
                id: action.id,
                text: action.text,
                completed: false
            }

        case 'TOGGLE_TODO':
        if (state.id !== action.id) {
            return state
        }

        return {
            ...state,
            completed: true
        }

        default:
            return state
    }
}

