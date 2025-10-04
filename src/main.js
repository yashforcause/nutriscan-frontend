import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/tailwind.css'

import Home from './views/Home.vue'
import Scan from './views/Scan.vue'
import Diet from './views/Diet.vue'
import Profile from './views/Profile.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/scan', component: Scan, name: 'Scan' },
  { path: '/diet', component: Diet, name: 'Diet' },
  { path: '/profile', component: Profile, name: 'Profile' }
]

const router = createRouter({ history: createWebHistory(), routes })
createApp(App).use(router).mount('#app')