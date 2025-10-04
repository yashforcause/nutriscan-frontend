<template>
  <Line :chart-data="chartData" :chart-options="options" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Calories',
      data: [1800, 2000, 2100, 1950, 2300, 1750, 2050],
      fill: true,
      borderColor: '#ff5a1f',
      backgroundColor: 'rgba(255,90,31,0.12)',
      pointBackgroundColor: '#ff8a4c',
    },
  ],
}

const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: false } },
}
</script>
