<template>
  <div>
    <doughnut-chart :chart-data="data" :chart-options="options" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Doughnut } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
const data = ref({ labels: ['Carbs','Protein','Fat'], datasets: [{ data: [50,30,20], backgroundColor: ['#ff8a4c','#ff5a1f','#ffd9bb'] }] })
const options = { responsive: true, plugins: { legend: { position: 'bottom' } } }
</script>