
const AUTH_LOGIN = "AUTH_LOGIN";

export const AuthLogin = (token) => {
    return {
        type : AUTH_LOGIN,
        payload : token,
    }
}