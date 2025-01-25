import React from 'react'
import { fetchLatestInvoices } from '../helpers/api'
import { LatestInvoices } from 'anjrot-components';

const LatesInvoicesWrapper = async () => {
    const fetchLatesInvoices = await fetchLatestInvoices();
  return (
    <LatestInvoices latestInvoices={fetchLatesInvoices} />
  )
}

export default LatesInvoicesWrapper