import {createStore} from "redux"

import reducers from "./index"

export default function configureStore(){
    return createStore(reducers)
}