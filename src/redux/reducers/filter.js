const initialState = {
    filters: []
}

export function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILTER':
            const newState={
                ...state,
                filters: [
                    ...state.filters,
                    action.payload
                ]
            }
            return newState;
        default:
            return state;
    }
}