import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import balanceSlice from './slices/balanceSlice'
import serviceSlice from './slices/serviceSlice'


export default combineReducers({
    auth: authSlice,
    services: serviceSlice,
    balance: balanceSlice
})