import axios from 'axios'
import { servicesRequest, servicesRequestSuccess, serviceSelected } from '../redux/slices/serviceSlice'
import { services } from "./data"


export const loadServices = () => {
    return (dispatch) => {
        dispatch(servicesRequest());
        setTimeout(() => {
            dispatch(servicesRequestSuccess(services))
        }, 1000);
    }
}

export const selectService = ({ image, name }) => {
    return (dispatch) => {
        dispatch(serviceSelected({ image, name }))
    }
}

