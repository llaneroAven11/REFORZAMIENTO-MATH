<template>
  <div class="phase-content">
    <div class="phase-header">
      <div class="phase-num" style="display:flex;justify-content:space-between;align-items:center;width:100%;max-width:600px;margin:0 auto 10px">
        <span>Simulacro · {{ uni.fullName }}</span>
        <button class="btn-close" @click="goBack" title="Salir del simulacro">✕</button>
      </div>
      <div class="phase-title">{{ uni.name }} — Simulacro de Admisión</div>
      <div class="phase-desc">Álgebra · Aritmética · Geometría · Trigonometría · Habilidad Matemática · Habilidad Verbal</div>
    </div>

    <template v-if="state === 'quiz'">
      <div class="card" style="padding:20px 28px;margin-bottom:20px">
        <div class="xp-row">
          <span class="xp-label">📊 Progreso</span>
          <span class="xp-val">{{ store.uniAnsweredCount }} / {{ store.uniQuestions.length }}</span>
        </div>
        <div class="progress-track" style="margin-bottom:0">
          <div class="progress-fill" :style="{ width: progressPct + '%' }"></div>
        </div>
      </div>

      <div
        v-for="(q, qi) in store.uniQuestions"
        :key="q.id"
        class="card"
        :style="{ animationDelay: qi * 0.06 + 's' }"
      >
        <div class="q-counter">
          <span class="q-num">Pregunta {{ qi + 1 }}/{{ store.uniQuestions.length }}</span>
          <span class="q-level medio">{{ subjectLabel(q.subject) }}</span>
        </div>
        <div class="q-text"><MathHtml :text="q.text" /></div>
        <div v-if="q.sub" class="q-math"><MathHtml :text="q.sub" /></div>
        <div class="options-grid">
          <button
            v-for="(opt, oi) in q.opts"
            :key="oi"
            class="opt-btn"
            :class="optionClass(qi, oi)"
            :disabled="store.uniAnswered[qi]"
            @click="select(qi, oi)"
          >
            <span class="opt-letter">{{ letters[oi] }}</span><MathHtml :text="opt" />
          </button>
        </div>
        <div
          v-if="store.uniAnswered[qi]"
          class="feedback-box show"
          :class="store.uniAnswers[qi] === q.ans ? 'ok' : 'err'"
        >
          <template v-if="store.uniAnswers[qi] === q.ans">
            ✅ <strong>¡Correcto!</strong>
          </template>
          <template v-else>
            ❌ <strong>Incorrecto.</strong>
          </template>
        </div>
      </div>

      <div v-if="store.uniAllAnswered" class="actions" style="margin-top:8px">
        <button class="btn btn-primary" @click="showResults">Ver mis resultados →</button>
      </div>
    </template>

    <template v-else-if="state === 'results'">
      <div class="card">
        <div class="medal-display">
          <span class="medal-emoji">{{ medal.emoji }}</span>
          <div class="medal-title">{{ medal.title }}</div>
          <div class="medal-sub">{{ medal.sub }}</div>
        </div>

        <div class="results-grid">
          <div class="stat-card green">
            <div class="stat-num">{{ store.uniResults.score }}</div>
            <div class="stat-name">Correctas</div>
          </div>
          <div class="stat-card red">
            <div class="stat-num">{{ store.uniResults.total - store.uniResults.score }}</div>
            <div class="stat-name">Incorrectas</div>
          </div>
          <div class="stat-card blue">
            <div class="stat-num">{{ store.uniResults.pct }}%</div>
            <div class="stat-name">Puntaje</div>
          </div>
        </div>

        <div style="margin-top:24px">
          <div class="card-title" style="margin-bottom:14px">📊 Desempeño por materia</div>
          <div v-for="(data, subject) in store.uniResults.subjects" :key="subject" style="margin-bottom:14px">
            <div style="display:flex;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:.88rem;font-weight:700;color:#374151">{{ subjectLabel(subject) }}</span>
              <span
                style="font-size:.8rem;font-weight:800;font-family:'JetBrains Mono',monospace"
                :style="{ color: pctColor(data) }"
              >{{ data.correct }}/{{ data.total }} · {{ Math.round(data.correct/data.total*100) }}%</span>
            </div>
            <div class="progress-track" style="margin-bottom:0">
              <div
                class="progress-fill"
                :style="{ width: Math.round(data.correct/data.total*100) + '%', background: pctColor(data), transition: 'width 1s 0.3s' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="actions" style="margin-top:28px">
          <button class="btn btn-secondary" @click="goBack">← Elegir otra universidad</button>
          <button class="btn btn-primary" @click="retry">🔄 Intentar de nuevo</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { universities, subjectLabels } from '../data/universities.js'
import MathHtml from './MathHtml.vue'

const router = useRouter()
const route = useRoute()
const store = useGameStore()

const letters = ['A', 'B', 'C', 'D']

const uniId = computed(() => route.params.universityId)
const uni = computed(() => universities.find(u => u.id === uniId.value) || universities[0])
const state = ref('quiz')

const progressPct = computed(() => {
  if (store.uniQuestions.length === 0) return 0
  return (store.uniAnsweredCount.value / store.uniQuestions.length) * 100
})

const medal = computed(() => {
  if (!store.uniResults) return { emoji: '📚', title: 'Completa el simulacro', sub: '' }
  const p = store.uniResults.pct
  if (p >= 90) return { emoji: '🥇', title: '¡Excepcional!', sub: 'Estás listo para el examen de admisión.' }
  if (p >= 70) return { emoji: '🥈', title: '¡Muy bien!', sub: 'Sigue practicando para mejorar.' }
  if (p >= 50) return { emoji: '🥉', title: '¡Buen avance!', sub: 'Repasa las áreas donde fallaste.' }
  return { emoji: '📚', title: 'Sigue estudiando', sub: 'Revisa la teoría y vuelve a intentarlo.' }
})

function subjectLabel(s) {
  return subjectLabels[s] || s
}

function pctColor(data) {
  const p = Math.round(data.correct / data.total * 100)
  return p >= 70 ? 'var(--lime)' : p >= 40 ? 'var(--gold)' : 'var(--accent)'
}

function optionClass(qi, oi) {
  if (!store.uniAnswered[qi]) return ''
  const chosen = store.uniAnswers[qi]
  const correct = store.uniQuestions[qi].ans
  if (oi === chosen && oi === correct) return 'correct'
  if (oi === chosen) return 'incorrect'
  if (oi === correct) return 'correct'
  return ''
}

function select(qi, oi) {
  store.answerUniQuestion(qi, oi)
}

function showResults() {
  store.finishUniQuiz()
  state.value = 'results'
}

function retry() {
  store.initUniQuiz(uniId.value)
  state.value = 'quiz'
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
