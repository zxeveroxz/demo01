import { InfoCard } from 'anjrot-components'
import React from 'react'
import { fetchCardData } from '../helpers/api';

const CardWrapper = async () => {
    const {numberOfCustomers,numberOfInvoices,totalPaidInvoices,totalPendingInvoices} = await fetchCardData(); 
    return (
        <>
            <InfoCard title="HOME" value={numberOfCustomers} type="pending" />
            <InfoCard title="FACTURAS" value={numberOfInvoices} type="pending" />
            <InfoCard title="TOTAL" value={totalPaidInvoices} type="collected" currency={{ locale: "en-US", currency: "PEN" }} />
            <InfoCard title="PENDIENTES" value={totalPendingInvoices} type="invoices" />
        </>
    )
}

export default CardWrapper