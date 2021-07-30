import { updateUserPassword, updateEmail, updateUserName } from "./userFromActionTypes";

// action creators

// userName action creator
const updateUserNameInput = (input) => {
    return {
        type: updateUserName,
        payload: input
    }
}

// email name action creator
const updateEmailInput = (input) => {
    return {
        type: updateEmail,
        payload: input
    }
}

const updateUserPasswordInput = (input) => {
    return {
        type: updateUserPassword,
        payload: input
    }
}

export { updateUserNameInput, updateEmailInput ,updateUserPasswordInput}