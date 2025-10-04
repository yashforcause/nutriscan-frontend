<template>
  <router-link :to="to" class="flex items-center gap-3 p-3 rounded hover:bg-slate-50" :class="{ 'bg-slate-50': isActive }">
    <div class="w-9 h-9 flex items-center justify-center rounded bg-brand-50 text-brand-700 font-bold uppercase">{{ iconChar }}</div>
    <div>
      <div class="font-medium">{{ label }}</div>
      <div class="text-xs text-slate-400">Quick access</div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({ to: { type: String, required: true }, icon: String, label: String })
const route = useRoute()
const isActive = computed(() => route.path === props.to)
const iconChar = computed(() => { const map = { home: '🏠', camera: '📸', plate: '🍽️', user: '👤' }; return map[props.icon] || '•' })
</script>