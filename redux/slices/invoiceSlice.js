import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoices: [],
    paidInvoices: [],
    unpaidInvoices: [],
    loading: false,
    error: "",
};

const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        invoicesRequest(state, action) {
            state.loading = true;
        },
        invoicesRequestSuccess(state, action) {
            state.loading = false;
            state.invoices = action.payload.invoices;
            state.unpaidInvoices = action.payload.unpaidInvoices;
            state.paidInvoices = action.payload.paidInvoices;
            state.error = "";
        },
        invoicesRequestFail(state, action) {
            Object.assign(state, initialState);
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    invoicesRequest,
    invoicesRequestFail,
    invoicesRequestSuccess,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
