
export const userLoginReducer = (state = { }, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                userInfo: action.payload,
            }

        case "LOGOUT":
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = { }, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                userInfo: action.payload,
            }
        case "LOGOUT":
            return {}

        default:
            return state
    }
}