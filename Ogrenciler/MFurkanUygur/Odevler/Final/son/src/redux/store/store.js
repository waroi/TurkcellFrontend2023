import { configureStore } from '@reduxjs/toolkit'

import getProcessNameReducer from '../slices/processData'
import getUsersNameReducer from '../slices/usersData'
import setLoggedUserReducer from '../slices/loggedUser'
import countBasketReducer from '../slices/countBasket'
const store = configureStore({
    reducer: {
        getProcessName: getProcessNameReducer,
        getUsersName: getUsersNameReducer,
        setLoggedUser: setLoggedUserReducer,
        setCountBasketName: countBasketReducer
    }
})

export default store