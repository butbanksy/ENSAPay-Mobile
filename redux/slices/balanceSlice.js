import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    amount: "",
    pass: "",
    phoneNumber: "",
    error: "",
    step: 1,
}

const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
        amountSelected(state, action) {
            state.amount = action.payload;
        },
        phoneNumberEntered(state, action) {
            state.phoneNumber = action.payload;
        },
        passSelected(state, action) {
            state.pass = action.payload;
        },
        clearBalance(state, action) {
            initialState
        }
    }
})

export const { amountSelected,
    clearBalance,
    passSelected,
    phoneNumberEntered
} = balanceSlice.actions;

export default balanceSlice.reducer;