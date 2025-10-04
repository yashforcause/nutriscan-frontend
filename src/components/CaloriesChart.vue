<template>
  <div>
    <line-chart :chart-data="chartData" :chart-options="options" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const values = [1800, 2000, 2100, 1950, 2300, 1750, 2050]
const chartData = ref({ labels, datasets: [{ label: 'Calories', data: values, fill: true, tension: 0.4, backgroundColor: 'rgba(255,90,31,0.12)', borderColor: '#ff5a1f', pointBackgroundColor: '#ff8a4c' }] })
const options = { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false } } }
</script>