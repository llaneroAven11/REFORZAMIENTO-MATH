<template>
  <div class="quiz-panel">
    <template v-if="!showReview">
      <div class="phase-header">
        <div class="phase-num" style="display:flex;justify-content:space-between;align-items:center;width:100%;max-width:480px;margin:0 auto 10px">
          <span>Fase 1 de 2 · {{ areaName }}</span>
        </div>
        <div class="phase-title">{{ mode === 'diagnostic' ? 'Cuestionario Diagnóstico' : 'Cuestionario de Salida' }}</div>
        <div class="phase-desc" v-if="mode === 'diagnostic'">Antes de ver la teoría, responde estas preguntas sobre <strong>{{ store.topicQuizTopic }}</strong>.</div>
        <div class="phase-desc" v-else>Ahora que revisaste la teoría, demuestra lo que aprendiste sobre <strong>{{ store.topicQuizTopic }}</strong>.</div>
      </div>

      <div class="progress-track">
        <div class="progress-fill" :style="{ width: store.topicQuizProgress + '%' }"></div>
      </div>
      <div class="progress-label">Pregunta {{ store.topicQuizCurrent + 1 }} de {{ store.topicQuizQuestions.length }}</div>

      <div v-if="store.topicQuizQuestions.length > 0" class="card">
        <div class="q-counter">
          <span class="q-num">Pregunta {{ store.topicQuizCurrent + 1 }}/{{ store.topicQuizQuestions.length }}</span>
          <span class="q-level" :class="q.level">{{ levelLabel[q.level] }}</span>
        </div>
        <div class="q-text"><MathHtml :text="q.text" /></div>
        <div v-if="q.sub" class="q-subtext"><MathHtml :text="q.sub" /></div>
        <div class="options-grid">
          <button
            v-for="(opt, i) in q.opts"
            :key="i"
            class="opt-btn"
            :class="{ selected: store.topicQuizAnswers[store.topicQuizCurrent] === i }"
            @click="select(i)"
          >
            <span class="opt-letter">{{ letters[i] }}</span><MathHtml :text="opt" />
          </button>
        </div>
      </div>

      <div v-else class="card" style="text-align:center;padding:40px">
        <p style="color:var(--muted);font-size:1.05rem">No hay preguntas disponibles para este tema.</p>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" :disabled="store.topicQuizCurrent === 0" @click="prev">
          ← Anterior
        </button>
        <button
          class="btn"
          :class="isLast ? 'btn-primary' : 'btn-teal'"
          :disabled="store.topicQuizAnswers[store.topicQuizCurrent] === null"
          @click="next"
        >
          {{ isLast ? 'Revisar respuestas →' : 'Siguiente →' }}
        </button>
      </div>
    </template>

    <template v-else>
      <div class="phase-header">
        <div class="phase-title">{{ mode === 'diagnostic' ? 'Resultados del Diagnóstico' : 'Resultados del Examen de Salida' }}</div>
        <div class="phase-desc" style="font-size:1.05rem"><strong>{{ store.topicQuizTopic }}</strong></div>
      </div>

      <div class="review-summary">
        <span class="rs-score">{{ correctCount }}/{{ store.topicQuizQuestions.length }}</span>
        <span class="rs-pct" :class="pctClass">{{ pct }}%</span>
      </div>

      <div
        v-for="(q, qi) in store.topicQuizQuestions"
        :key="qi"
        class="card review-card"
        :class="isCorrect(qi) ? 'r-card-ok' : 'r-card-err'"
      >
        <div class="rq-header">
          <span class="rq-num">Pregunta {{ qi + 1 }}</span>
          <span class="rq-badge" :class="isCorrect(qi) ? 'badge-ok' : 'badge-err'">
            {{ isCorrect(qi) ? '✓ Correcto' : '✗ Incorrecto' }}
          </span>
        </div>
        <div class="q-text"><MathHtml :text="q.text" /></div>
        <div v-if="q.sub" class="q-subtext"><MathHtml :text="q.sub" /></div>
        <div class="options-grid review-opts">
          <div
            v-for="(opt, oi) in q.opts"
            :key="oi"
            class="opt-btn r-opt"
            :class="optReviewClass(qi, oi)"
          >
            <span class="opt-letter">{{ letters[oi] }}</span><MathHtml :text="opt" />
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn btn-primary" @click="done">Continuar →</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { subjectAreas } from '../data/subjectAreas.js'
import MathHtml from './MathHtml.vue'

const props = defineProps({ mode: { type: String, required: true } })
const emit = defineEmits(['done'])
const store = useGameStore()

const letters = ['A', 'B', 'C', 'D']
const levelLabel = { basico: 'Básico', medio: 'Intermedio', avanzado: 'Avanzado' }
const showReview = ref(false)

const areaName = computed(() => {
  const a = subjectAreas.find(s => s.id === store.currentArea)
  return a ? a.name : ''
})

const q = computed(() => store.topicQuizQuestions[store.topicQuizCurrent] || { opts: [] })
const isLast = computed(() => store.topicQuizCurrent === store.topicQuizQuestions.length - 1)

const correctCount = computed(() => {
  let c = 0
  store.topicQuizQuestions.forEach((q, i) => {
    if (store.topicQuizAnswers[i] === q.ans) c++
  })
  return c
})

const pct = computed(() => {
  if (store.topicQuizQuestions.length === 0) return 0
  return Math.round((correctCount.value / store.topicQuizQuestions.length) * 100)
})

const pctClass = computed(() => {
  if (pct.value >= 80) return 'pct-great'
  if (pct.value >= 50) return 'pct-ok'
  return 'pct-low'
})

function isCorrect(qi) {
  return store.topicQuizAnswers[qi] === store.topicQuizQuestions[qi].ans
}

function optReviewClass(qi, oi) {
  const userChoice = store.topicQuizAnswers[qi]
  const correct = store.topicQuizQuestions[qi].ans
  if (oi === userChoice && oi === correct) return 'r-opt-correct'
  if (oi === userChoice) return 'r-opt-wrong'
  return 'r-opt-dim'
}

function select(i) {
  store.setTopicQuizAnswer(store.topicQuizCurrent, i)
}

function prev() {
  store.prevTopicQuiz()
}

function next() {
  if (!store.allTopicQuizAnswered && isLast.value) return
  if (isLast.value) {
    store.finishTopicQuiz()
    showReview.value = true
  } else {
    store.nextTopicQuiz()
  }
}

function done() {
  emit('done')
}
</script>

<style scoped>
.review-summary {
  text-align: center;
  margin: 20px auto 28px;
}
.rs-score {
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff;
  display: block;
}
.rs-pct {
  font-size: 1.1rem;
  font-weight: 800;
  margin-top: 4px;
}
.pct-great { color: #4ade80; }
.pct-ok { color: #fbbf24; }
.pct-low { color: #f87171; }

.review-card {
  margin-bottom: 16px;
  padding: 20px 22px;
}
.r-card-ok { border-left: 4px solid #4ade80; }
.r-card-err { border-left: 4px solid #f87171; }

.rq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.rq-num {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.rq-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.badge-ok { background: rgba(74,222,128,0.15); color: #4ade80; }
.badge-err { background: rgba(248,113,113,0.15); color: #f87171; }

.review-opts {
  cursor: default;
  margin-top: 8px;
}
.r-opt {
  cursor: default;
  opacity: 0.55;
}
.r-opt-correct {
  opacity: 1;
  border-color: #4ade80 !important;
  background: rgba(74,222,128,0.1) !important;
  color: #4ade80;
}
.r-opt-wrong {
  opacity: 1;
  border-color: #f87171 !important;
  background: rgba(248,113,113,0.1) !important;
  color: #f87171;
}
.r-opt-dim {
  opacity: 0.4;
}

.rq-exp {
  margin-top: 12px;
  padding: 12px 14px;
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.5;
}
.rq-exp strong {
  color: #fbbf24;
}
</style>
