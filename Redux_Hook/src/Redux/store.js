
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { LoginReducer } from "./Login/reducer";

const rootReducer = combineReducers({
    IsAuth : LoginReducer,
})

export const store = createStore(

    rootReducer,

    applyMiddleware(thunk),

)

store.subscribe(() => {
    console.log("Subscribe :", store.getState());
})