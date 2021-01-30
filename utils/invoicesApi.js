import {
    invoicesRequest,
    invoicesRequestSuccess,
} from "../redux/slices/invoiceSlice";
import { invoices } from "./data";

export const getInvoices = (name) => {
    return (dispatch) => {
        dispatch(invoicesRequest());
        console.log(invoices);
        const paidInvoices = invoices.filter((invoice) => invoice.paid);
        const unpaidInvoices = invoices.filter((invoice) => !invoice.paid);
        setTimeout(() => {
            dispatch(
                invoicesRequestSuccess({
                    unpaidInvoices,
                    paidInvoices,
                    invoices,
                })
            );
        }, 1000);
    };
};
