<template>
  <div class="phase-content">
    <div class="phase-header">
      <div class="phase-num" style="display:flex;justify-content:space-between;align-items:center;width:100%;max-width:480px;margin:0 auto 10px">
        <span>Fase 3 de 3 · {{ areaName }}</span>
        <button class="btn-close" @click="goBack" title="Salir del examen">✕</button>
      </div>
      <div class="phase-title">Cuestionario de Salida</div>
      <div class="phase-desc">Aplica todo lo aprendido. Tienes retroalimentación inmediata en cada respuesta.</div>
    </div>

    <template v-if="store.postQuestions.length > 0">
      <div class="xp-bar-wrap card" style="padding:20px 28px">
        <div class="xp-row">
          <span class="xp-label">⚡ XP acumulado</span>
          <span class="xp-val">{{ store.xp }} XP</span>
        </div>
        <div class="progress-track" style="margin-bottom:0">
          <div class="progress-fill" :style="{ width: store.postProgress + '%' }"></div>
        </div>
        <div class="progress-label" style="margin-bottom:0;margin-top:6px">
          Pregunta {{ store.postAnsweredCount }} de {{ store.postQuestions.length }}
        </div>
      </div>

      <div
        v-for="(q, qi) in store.postQuestions"
        :key="q.id"
        class="card"
        :style="{ animationDelay: qi * 0.08 + 's' }"
      >
        <div class="q-counter">
          <span class="q-num">Pregunta {{ qi + 1 }}/{{ store.postQuestions.length }} · {{ q.topic }}</span>
          <span class="q-level" :class="q.level">{{ levelLabel[q.level] }} · +{{ xpMap[q.level] }} XP</span>
        </div>
        <div class="q-text"><MathHtml :text="q.text" /></div>
        <div v-if="q.sub" class="q-math"><MathHtml :text="q.sub" /></div>
        <div class="options-grid">
          <button
            v-for="(opt, oi) in q.opts"
            :key="oi"
            class="opt-btn"
            :class="optionClass(qi, oi)"
            :disabled="store.postAnswered[qi]"
            @click="select(qi, oi)"
          >
            <span class="opt-letter">{{ letters[oi] }}</span><MathHtml :text="opt" />
          </button>
        </div>
        <div
          v-if="store.postAnswered[qi]"
          class="feedback-box show"
          :class="store.postAnswers[qi] === q.ans ? 'ok' : 'err'"
        >
          <template v-if="store.postAnswers[qi] === q.ans">
            ✅ <strong>¡Correcto!</strong> <MathHtml :text="q.explanation" />
          </template>
          <template v-else>
            ❌ <strong>Respuesta correcta: {{ letters[q.ans] }}.</strong> <MathHtml :text="q.explanation" />
          </template>
        </div>
      </div>

      <div v-if="store.allPostAnswered" class="actions" style="margin-top:12px">
        <button class="btn btn-gold" @click="goToResults">
          Ver mis resultados 🏆
        </button>
      </div>
    </template>

    <div v-else class="card" style="text-align:center;padding:40px">
      <p style="color:var(--muted);font-size:1.05rem">No hay preguntas de examen disponibles para esta área.</p>
      <button class="btn btn-secondary" style="margin-top:16px" @click="goBack">← Volver al inicio</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { subjectAreas } from '../data/subjectAreas.js'
import MathHtml from './MathHtml.vue'

const router = useRouter()
const route = useRoute()
const store = useGameStore()

const letters = ['A', 'B', 'C', 'D']
const levelLabel = { basico: 'Básico', medio: 'Intermedio', avanzado: 'Avanzado' }
const xpMap = { basico: 10, medio: 20, avanzado: 30 }

const areaName = computed(() => {
  const a = subjectAreas.find(s => s.id === store.currentArea)
  return a ? a.name : ''
})

onMounted(() => {
  if (!store.currentArea) {
    router.replace({ name: 'welcome' })
  }
})

function select(qi, oi) {
  store.answerPostQuestion(qi, oi)
}

function optionClass(qi, oi) {
  if (!store.postAnswered[qi]) return {}
  const q = store.postQuestions[qi]
  return {
    correct: oi === q.ans,
    incorrect: oi !== q.ans && oi === store.postAnswers[qi],
  }
}

function goToResults() {
  store.finishPostQuiz()
  router.push({ name: 'results', params: { areaId: store.currentArea } })
}

function goBack() {
  router.push({ name: 'welcome' })
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
