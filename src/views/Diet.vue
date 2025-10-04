<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white p-6 rounded shadow">
      <h3 class="font-semibold">Personalized Diet Plan</h3>
      <p class="text-sm text-slate-500">Sample plan generated from your profile (demo data).</p>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-brand-50 rounded">
          <div class="text-sm">Calorie Target</div>
          <div class="text-xl font-bold">2150 kcal</div>
        </div>
        <div class="p-4 bg-white rounded border">
          <div class="text-sm">Protein</div>
          <div class="text-xl font-bold">120 g</div>
        </div>
        <div class="p-4 bg-white rounded border">
          <div class="text-sm">Carbs</div>
          <div class="text-xl font-bold">250 g</div>
        </div>
      </div>

      <div class="mt-6">
        <h4 class="font-semibold">Sample Meals</h4>
        <ul class="mt-3 space-y-3">
          <li class="p-3 bg-white rounded border flex items-center justify-between">
            <div>
              <div class="font-medium">Breakfast</div>
              <div class="text-xs text-slate-400">Oatmeal, banana, almonds</div>
            </div>
            <div class="font-semibold">460 kcal</div>
          </li>
          <li class="p-3 bg-white rounded border flex items-center justify-between">
            <div>
              <div class="font-medium">Lunch</div>
              <div class="text-xs text-slate-400">Grilled chicken salad</div>
            </div>
            <div class="font-semibold">540 kcal</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>