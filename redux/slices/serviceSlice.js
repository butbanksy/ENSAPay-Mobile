import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    services: [],
    selectedServiceName: "",
    selectedServiceImage: "",
    error: "",
    loading: false,
}

const authSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        servicesRequest(state, action) {
            state.loading = true;
        },
        servicesRequestSuccess(state, action) {
            state.loading = false;
            state.services = action.payload;
            state.error = "";
        },
        servicesRequestFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        serviceSelected(state, action) {
            state.selectedServiceImage = action.payload.image;
            state.selectedServiceName = action.payload.name;
        },
        serviceUnselected(state, action) {
            state.selectedServiceImage = "";
            state.serviceSelectedName = "";
        }
    }
})

export const { serviceSelected,
    serviceUnselected,
    servicesRequest,
    servicesRequestFail,
    servicesRequestSuccess
} = authSlice.actions

export default authSlice.reducer;