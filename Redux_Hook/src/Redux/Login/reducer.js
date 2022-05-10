
const InitialState = {

    isAuth : "Token is not available",

}

export const LoginReducer = (store = InitialState, action) => {
    console.log('action:', action)
    switch(action.type) {
        case "AUTH_LOGIN" : return {
            ...store,
            isAuth : action.payload,
        };
        default : return store;
    }
}