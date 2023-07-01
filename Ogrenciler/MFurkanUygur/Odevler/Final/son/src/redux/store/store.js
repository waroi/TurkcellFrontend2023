import { configureStore } from '@reduxjs/toolkit'

import getProcessNameReducer from '../slices/processData'
import getUsersNameReducer from '../slices/usersData'
import setLoggedUserReducer from '../slices/loggedUser'
const store = configureStore({
    reducer: {
        getProcessName: getProcessNameReducer,
        getUsersName: getUsersNameReducer,
        setLoggedUser: setLoggedUserReducer
    }
})

export default store