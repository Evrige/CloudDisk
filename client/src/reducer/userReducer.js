const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action){
    switch (action.type) {
        case "ADD": return {...state}
        default:
            return state;
    }
}