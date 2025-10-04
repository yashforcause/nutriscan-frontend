<template>
  <div v-motion="motionVariants" class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold text-brand-500 mb-4">Macronutrients</h2>
    <Doughnut :chart-data="data" :chart-options="options" />
  </div>
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
import { useMotionVariants } from '@vueuse/motion'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Dummy data
const data = {
  labels: ['Carbs', 'Protein', 'Fat'],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ['#ff8a4c', '#ff5a1f', '#ffd9bb'],
    },
  ],
}

// Chart options
const options = {
  responsive: true,
  plugins: { legend: { position: 'bottom' } },
}

// Motion animation (v2)
const motionVariants = useMotionVariants({
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
})
</script>
