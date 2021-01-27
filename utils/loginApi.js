import { loginRequest, loginRequestSuccess, logoutRequest } from "../redux/slices/authSlice"

export const login = () => {
    return (dispatch) => {
        dispatch(loginRequest());
        setTimeout(() => {
            dispatch(loginRequestSuccess("testing"))
        }, 2000);
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutRequest());
    }
}