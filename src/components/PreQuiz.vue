<template>
  <div class="phase-content">
    <div class="phase-header">
      <div class="phase-num" style="display:flex;justify-content:space-between;align-items:center;width:100%;max-width:480px;margin:0 auto 10px">
        <span>Fase 1 de 3 · {{ areaName }}</span>
        <button class="btn-close" @click="goBack" title="Salir del diagnóstico">✕</button>
      </div>
      <div class="phase-title">Cuestionario de Entrada</div>
      <div class="phase-desc">Antes de aprender, veamos qué sabes. Responde con confianza — no hay calificación aquí, solo exploración.</div>
    </div>

    <div class="progress-track">
      <div class="progress-fill" :style="{ width: store.preProgress + '%' }"></div>
    </div>
    <div class="progress-label">Pregunta {{ store.currentPreQ + 1 }} de {{ store.preQuestions.length }}</div>

    <template v-if="store.preQuestions.length > 0">
      <div class="card">
        <div class="q-counter">
          <span class="q-num">Pregunta {{ store.currentPreQ + 1 }}/{{ store.preQuestions.length }}</span>
          <span class="q-level" :class="q.level">{{ levelLabel[q.level] }}</span>
        </div>
        <div class="q-text">{{ q.text }}</div>
        <div v-if="q.sub" class="q-subtext">{{ q.sub }}</div>
        <div class="options-grid">
          <button
            v-for="(opt, i) in q.opts"
            :key="i"
            class="opt-btn"
            :class="{ selected: store.preAnswers[store.currentPreQ] === i }"
            @click="select(i)"
          >
            <span class="opt-letter">{{ letters[i] }}</span>{{ opt }}
          </button>
        </div>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" :disabled="store.currentPreQ === 0" @click="prev">
          ← Anterior
        </button>
        <button
          class="btn"
          :class="isLast ? 'btn-primary' : 'btn-teal'"
          :disabled="store.preAnswers[store.currentPreQ] === null"
          @click="next"
        >
          {{ isLast ? '¡Ir a teoría! →' : 'Siguiente →' }}
        </button>
      </div>
    </template>

    <div v-else class="card" style="text-align:center;padding:40px">
      <p style="color:var(--muted);font-size:1.05rem">No hay preguntas de diagnóstico disponibles para esta área.</p>
      <button class="btn btn-primary" style="margin-top:16px" @click="goToTheory">Ir a teoría →</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { subjectAreas } from '../data/subjectAreas.js'

const router = useRouter()
const route = useRoute()
const store = useGameStore()

const letters = ['A', 'B', 'C', 'D']
const levelLabel = { basico: 'Básico', medio: 'Intermedio', avanzado: 'Avanzado' }

const areaName = computed(() => {
  const a = subjectAreas.find(s => s.id === store.currentArea)
  return a ? a.name : ''
})

const q = computed(() => store.preQuestions[store.currentPreQ] || { opts: [] })
const isLast = computed(() => store.currentPreQ === store.preQuestions.length - 1)

onMounted(() => {
  if (!store.currentArea) {
    router.replace({ name: 'welcome' })
  }
})

function select(i) {
  store.setPreAnswer(store.currentPreQ, i)
}

function prev() {
  store.prevPreQuestion()
}

function next() {
  if (isLast.value) {
    store.finishPreQuiz()
    router.push({ name: 'theory', params: { areaId: store.currentArea } })
  } else {
    store.nextPreQuestion()
  }
}

function goBack() {
  router.push({ name: 'welcome' })
}

function goToTheory() {
  router.push({ name: 'theory', params: { areaId: store.currentArea } })
}
</script>

<style scoped>
.btn-close {
  background: none;
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.6);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.btn-close:hover {
  background: rgba(233,69,96,0.15);
  border-color: var(--accent);
  color: var(--accent);
}
</style>
