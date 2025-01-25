import React from 'react'
import { fetchRevenue } from '../helpers/api'
import { RevenueChart } from 'anjrot-components';

const ChartWrapper = async () => {
    const revenue = await fetchRevenue();
  return (
    <RevenueChart revenues={revenue} chartHeight={350} />
  )
}

export default ChartWrapper