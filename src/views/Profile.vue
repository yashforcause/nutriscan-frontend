<template>
  <div class="max-w-3xl mx-auto">
    <div class="bg-white p-6 rounded shadow">
      <h3 class="font-semibold">Profile & Preferences</h3>
      <p class="text-sm text-slate-500">Configure your height, weight, health conditions and dietary preferences.</p>

      <form @submit.prevent="save" class="mt-4 space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <label class="block"><div class="text-xs text-slate-500">Name</div><input v-model="form.name" class="mt-1 block w-full border rounded p-2" /></label>
          <label class="block"><div class="text-xs text-slate-500">Email</div><input v-model="form.email" class="mt-1 block w-full border rounded p-2" /></label>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <label><div class="text-xs text-slate-500">Height (cm)</div><input v-model.number="form.height" type="number" class="mt-1 block w-full border rounded p-2" /></label>
          <label><div class="text-xs text-slate-500">Weight (kg)</div><input v-model.number="form.weight" type="number" class="mt-1 block w-full border rounded p-2" /></label>
          <label><div class="text-xs text-slate-500">Age</div><input v-model.number="form.age" type="number" class="mt-1 block w-full border rounded p-2" /></label>
        </div>

        <div class="flex gap-3 items-center">
          <label class="flex items-center gap-2"><input type="checkbox" v-model="form.prefs" value="vegan" /> Vegan</label>
          <label class="flex items-center gap-2"><input type="checkbox" v-model="form.prefs" value="vegetarian" /> Vegetarian</label>
          <label class="flex items-center gap-2"><input type="checkbox" v-model="form.prefs" value="low-carb" /> Low carb</label>
        </div>

        <div class="flex gap-3">
          <button type="submit" class="px-4 py-2 rounded bg-brand-500 text-white">Save</button>
          <button type="button" @click="reset" class="px-4 py-2 rounded border">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ name: 'Demo User', email: 'demo@example.com', height: 170, weight: 70, age: 30, prefs: [] })
function save() { alert('Saved (demo)') }
function reset() { form.name='Demo User'; form.email='demo@example.com'; form.height=170; form.weight=70; form.age=30; form.prefs=[] }
</script>