<template>
  <Doughnut :chart-data="data" :chart-options="options" />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement)

const data = {
  labels: ['Carbs', 'Protein', 'Fat'],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ['#ff8a4c', '#ff5a1f', '#ffd9bb'],
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}
</script>
