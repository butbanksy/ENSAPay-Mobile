import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import { ActivityIndicator, Surface } from "react-native-paper";
import InvoiceCard from "./InvoiceCard";
import UnpaidInvoiceList from "./UnpaidInvoicesList";
import PaidInvoicesList from "./PaidInvoicesList";
import { getInvoices } from "../../utils/invoicesApi";

export default function InvoiceCardList() {
    const invoiceSlice = useSelector((state) => state.invoices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInvoices());
    }, []);

    return (
        <Surface style={styles.container}>
            {invoiceSlice.loading ? (
                <Surface style={styles.loading}>
                    <ActivityIndicator />
                </Surface>
            ) : (
                <Surface>
                    <UnpaidInvoiceList />
                    <PaidInvoicesList />
                </Surface>
            )}
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        justifyContent: "center",
        alignItems: "center",
    },
});
