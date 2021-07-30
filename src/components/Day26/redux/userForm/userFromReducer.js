import { updateUserPassword, updateEmail, updateUserName } from "./userFromActionTypes";

const initalState = {
    username: '',
    email: ''
}

export const userFromReducer = (state = initalState, action) => {
    switch (action.type) {
        case updateUserName:
            return {
                ...state,
                username: action.payload
            }
        case updateEmail:
            return {
                ...state,
                email: action.payload
            }
        case updateUserPassword:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}
