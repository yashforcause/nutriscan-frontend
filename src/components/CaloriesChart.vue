<template>
  <div v-motion="motionVariants" class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold text-brand-500 mb-4">Weekly Calories</h2>
    <Line :chart-data="chartData" :chart-options="options" />
  </div>
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
import { useMotionVariants } from '@vueuse/motion'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

// Dummy data
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

// Chart options
const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: false } },
}

// Motion animation (v2)
const motionVariants = useMotionVariants({
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
})
</script>
