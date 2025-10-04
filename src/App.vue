<template>
  <div class="min-h-screen flex bg-slate-50 text-slate-800">
    <aside class="w-72 bg-white border-r hidden md:block">
      <div class="p-6 border-b">
        <h1 class="text-2xl font-bold text-brand-600">NutriScan</h1>
        <p class="text-sm text-slate-500 mt-1">Warm theme — demo</p>
      </div>
      <nav class="p-6 space-y-2">
        <SidebarItem to="/" icon="home" label="Dashboard" />
        <SidebarItem to="/scan" icon="camera" label="Scan Food" />
        <SidebarItem to="/diet" icon="plate" label="My Diet Plan" />
        <SidebarItem to="/profile" icon="user" label="Profile" />
      </nav>
      <div class="p-6 mt-auto text-xs text-slate-400">Demo — animated charts</div>
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="flex items-center justify-between px-6 py-4 bg-white border-b md:pl-96">
        <div class="flex items-center gap-4">
          <button class="md:hidden p-2 rounded bg-slate-100">☰</button>
          <h2 class="text-lg font-semibold">Dashboard</h2>
          <span class="text-sm text-slate-400">Overview & insights</span>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-sm text-slate-500">Hello, Demo User</div>
          <img src="/src/assets/avatar.png" alt="avatar" class="w-9 h-9 rounded-full border" />
        </div>
      </header>

      <main class="p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import SidebarItem from './components/SidebarItem.vue'
</script>
