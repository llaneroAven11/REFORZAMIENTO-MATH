<template>
  <div class="quiz-panel">
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
        {{ isLast ? (store.allTopicQuizAnswered ? 'Finalizar →' : 'Responder todo →') : 'Siguiente →' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { subjectAreas } from '../data/subjectAreas.js'
import MathHtml from './MathHtml.vue'

const props = defineProps({ mode: { type: String, required: true } })
const emit = defineEmits(['done'])
const store = useGameStore()

const letters = ['A', 'B', 'C', 'D']
const levelLabel = { basico: 'Básico', medio: 'Intermedio', avanzado: 'Avanzado' }

const areaName = computed(() => {
  const a = subjectAreas.find(s => s.id === store.currentArea)
  return a ? a.name : ''
})

const q = computed(() => store.topicQuizQuestions[store.topicQuizCurrent] || { opts: [] })
const isLast = computed(() => store.topicQuizCurrent === store.topicQuizQuestions.length - 1)

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
    emit('done')
  } else {
    store.nextTopicQuiz()
  }
}
</script>
