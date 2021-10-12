import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales for 2020(M)',
        data: [100, 200, 300, 150, 450],
        borderColor: ['rgba(255,215,0,1)'],
        backgroundColor: ['rgba(255,215,0,1)'],
        pointBackgroundColor: ['rgba(255,215,0,1)'],
        pointBorderColor: ['rgba(255,215,0,1)'],
      },
    ],
  }
  return <Line data={data} />
}

export default LineChart
