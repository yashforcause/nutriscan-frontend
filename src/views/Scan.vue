<template>
  <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="md:col-span-2 bg-white p-6 rounded shadow">
      <h3 class="font-semibold mb-4">Scan Food</h3>
      <p class="text-sm text-slate-500 mb-4">Upload a photo and we will analyze it (demo, using dummy data).</p>
      <div class="border-dashed border-2 border-slate-100 rounded p-6 flex flex-col items-center gap-4">
        <input type="file" @change="onFileChange" class="hidden" ref="fileInput" id="file" />
        <div v-if="preview" class="w-full flex justify-center">
          <img :src="preview" alt="preview" class="max-h-48 rounded object-cover" />
        </div>
        <div v-else class="text-slate-400">No image selected</div>
        <div class="flex gap-3 mt-3">
          <button @click="() => $refs.fileInput.click()" class="px-4 py-2 rounded border">Choose Image</button>
          <button @click="analyze" class="px-4 py-2 rounded bg-brand-500 text-white">Analyze</button>
        </div>
      </div>

      <div v-if="result" class="mt-6">
        <h4 class="font-semibold">Analysis Result</h4>
        <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded border">
            <div class="text-sm text-slate-500">Total Calories</div>
            <div class="text-2xl font-bold">{{ result.totalCalories }} kcal</div>
            <div class="text-xs text-slate-400 mt-1">Estimated from detected items</div>
          </div>
          <div class="bg-white p-4 rounded border">
            <div class="text-sm text-slate-500">Detected Items</div>
            <ul class="mt-2 space-y-2">
              <li v-for="(it,i) in result.items" :key="i" class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 bg-slate-100 rounded flex items-center justify-center">{{ it.emoji }}</div>
                  <div>
                    <div class="font-medium">{{ it.name }}</div>
                    <div class="text-xs text-slate-400">confidence {{ Math.round(it.confidence*100) }}%</div>
                  </div>
                </div>
                <div class="font-semibold">{{ it.calories }} kcal</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-white p-4 rounded border">
          <h5 class="font-semibold">Suggestions</h5>
          <p class="text-sm text-slate-500">Portion seems large — consider half portion if you want to reduce calories.</p>
          <div class="mt-3 flex gap-3">
            <button class="px-4 py-2 rounded border">Log as is</button>
            <button class="px-4 py-2 rounded bg-brand-500 text-white">Log as half</button>
          </div>
        </div>
      </div>
    </div>

    <aside class="bg-white p-6 rounded shadow">
      <h4 class="font-semibold">Scan Tips</h4>
      <ul class="mt-3 text-sm text-slate-500 space-y-2">
        <li>Use natural light</li>
        <li>Place food on a plain plate</li>
        <li>Include a reference object for size</li>
      </ul>

      <div class="mt-6">
        <h5 class="font-semibold">Quick Demo Data</h5>
        <div class="text-sm text-slate-500">This demo doesn't call external APIs — results are mocked.</div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockAnalyze } from '../utils/mock.js'
const preview = ref(null)
const result = ref(null)
function onFileChange(e) {
  const f = e.target.files?.[0]
  if (!f) return
  const reader = new FileReader()
  reader.onload = () => { preview.value = reader.result }
  reader.readAsDataURL(f)
}
async function analyze() { result.value = mockAnalyze(); window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>