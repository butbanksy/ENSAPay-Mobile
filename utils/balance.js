import { amountSelected, phoneNumberEntered } from "../redux/slices/balanceSlice"


export const setAmount = (amount) => {
    return (dispatch) => {
        dispatch(amountSelected(amount))
    }
}

export const setPhoneNumber = (phoneNumber) => {
    return (dispatch) => {
        dispatch(phoneNumberEntered(phoneNumber))
    }

}