import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { StyleSheet } from 'react-native'
import { ActivityIndicator, Surface } from 'react-native-paper'
import ServiceCard from './ServiceCard'
import { loadServices } from "../../utils/servicesApi"

export default function ServiceCardList() {

    const serviceSlice = useSelector(state => state.services)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadServices())
    }, [])


    return (
        <Surface style={styles.container}>
            {!serviceSlice.loading ? serviceSlice.services.map((service) => (
                <ServiceCard key={service.id} image={service.image} name={service.name} invoiceType={service.invoiceType} />
            )) : <Surface style={styles.loading}><ActivityIndicator /></Surface>}
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    loading: {
        justifyContent: "center",
        alignItems: 'center',
    }

})