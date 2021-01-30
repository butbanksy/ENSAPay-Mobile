import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import { ActivityIndicator, Surface, Text } from "react-native-paper";
import InvoiceCard from "./InvoiceCard";
import { redalInvoices } from "../../utils/data";

export default function PaidInvoicesList() {
    const serviceSlice = useSelector((state) => state.services);
    const invoiceSlice = useSelector((state) => state.invoices);

    return (
        <Surface style={styles.container}>
            <Text style={styles.paymentStatus}>Réglés ({invoiceSlice.paidInvoices.length})</Text>
            {invoiceSlice.paidInvoices.map((invoice) => (
                <InvoiceCard
                    key={invoice.id}
                    reference={invoice.reference}
                    date={invoice.date}
                    price={invoice.price}
                    paid={invoice.paid}
                    image={serviceSlice.selectedServiceImage}
                />
            ))}
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    paymentStatus: {
        marginLeft: 10,
        fontSize: 13,
        fontFamily: "Roboto_500Medium",
    },
});
