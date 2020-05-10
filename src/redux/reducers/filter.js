const initialState = {
    filters: []
}

export function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILTER':
            let modifiedFilters = state.filters.filter((f)=> {
                return f.filterName!==action.payload.filterName
            });
            
            if(modifiedFilters.length===state.filters.length){
                modifiedFilters.push(action.payload);
            }

            const newState={
                ...state,
                filters: modifiedFilters
            }
            return newState;
        default:
            return state;
    }
}