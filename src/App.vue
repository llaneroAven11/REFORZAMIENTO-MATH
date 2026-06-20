<template>
  <div id="particles"></div>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const colors = ['#e94560', '#00b4d8', '#f5a623', '#52b788']
  const container = document.getElementById('particles')
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('div')
    dot.className = 'particle'
    const s = Math.random() * 18 + 8
    dot.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;background:${colors[i % colors.length]};animation-duration:${Math.random() * 18 + 10}s;animation-delay:${Math.random() * -20}s`
    container.appendChild(dot)
  }
})
</script>
