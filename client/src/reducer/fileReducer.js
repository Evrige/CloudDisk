const defaultState = {

}

export default function fileReducer(state = defaultState, action){
    switch (action.type) {
        case "ADD": return {...state}
        default:
            return state;
    }
}