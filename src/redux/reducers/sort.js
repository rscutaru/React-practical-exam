const initialState = {
    sortBy: ''
}

export function sortReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SORT':
            const newState={
                ...state,
                sortBy: action.payload.sortBy
            }
            return newState;
        default:
            return state;
    }
}
