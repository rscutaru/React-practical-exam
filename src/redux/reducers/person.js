const initialState = {
    people: []
}

export function personReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PERSON':
            const newState={
                ...state,
                people: [
                    ...state.people,
                    action.payload
                ]
            }
            return newState;
        default:
            return state;
    }
}