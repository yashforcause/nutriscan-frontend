<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 space-y-6">
      <motion-div v-motion class="bg-white p-6 rounded shadow">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-semibold">Welcome back</h3>
            <p class="text-sm text-slate-500">Here's a summary of your nutrition for the week (demo data)</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold">2,150</div>
            <div class="text-xs text-slate-400">kcal target</div>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-4">
          <div class="p-4 bg-brand-50 rounded transform hover:-translate-y-1 transition"> 
            <div class="text-sm text-slate-600">Consumed</div>
            <div class="text-xl font-bold">1,150 kcal</div>
            <div class="text-xs text-slate-400 mt-1">Breakfast + Lunch</div>
          </div>

          <div class="p-4 bg-white rounded border transform hover:-translate-y-1 transition">
            <div class="text-sm text-slate-600">Protein</div>
            <div class="text-xl font-bold">78 g</div>
            <div class="text-xs text-slate-400 mt-1">Daily goal 120 g</div>
          </div>

          <div class="p-4 bg-white rounded border transform hover:-translate-y-1 transition">
            <div class="text-sm text-slate-600">Carbs</div>
            <div class="text-xl font-bold">210 g</div>
            <div class="text-xs text-slate-400 mt-1">Daily goal 250 g</div>
          </div>
        </div>

        <div class="mt-6">
          <CaloriesChart />
        </div>
      </motion-div>

      <motion-div v-motion class="bg-white p-6 rounded shadow">
        <h4 class="font-semibold mb-4">Nutrition Breakdown</h4>
        <div class="max-w-md">
          <DonutChart />
        </div>
      </motion-div>
    </div>

    <aside class="space-y-6">
      <div class="bg-white p-6 rounded shadow">
        <div class="flex items-center justify-between">
          <div>
            <h5 class="font-semibold">Quick Actions</h5>
            <p class="text-sm text-slate-400">Start a new scan or view plan</p>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-1 gap-3">
          <router-link to="/scan" class="block text-center p-3 rounded bg-brand-500 text-white font-semibold">Scan Food</router-link>
          <router-link to="/diet" class="block text-center p-3 rounded border">View Diet Plan</router-link>
        </div>
      </div>

      <div class="bg-white p-6 rounded shadow">
        <h6 class="font-semibold mb-2">Preferences</h6>
        <div class="text-sm text-slate-500">Vegan: No • Allergies: None</div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { MotionPlugin } from '@vueuse/motion'
import { useMotion } from '@vueuse/motion'
import CaloriesChart from '../components/CaloriesChart.vue'
import DonutChart from '../components/DonutChart.vue'

// register motion locally via directive in template (v-motion)
</script>
