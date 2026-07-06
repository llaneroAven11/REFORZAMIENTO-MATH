<template>
  <div class="phase-content">
    <div class="phase-header">
      <div class="phase-num">{{ areaName }} — Resultados finales</div>
      <div class="phase-title">{{ studentName }}, ¡evaluación completa!</div>
    </div>

    <div v-if="store.postQuestions.length > 0" class="card">
      <div class="medal-display">
        <span class="medal-emoji">{{ medal.emoji }}</span>
        <div class="medal-title">{{ medal.title }}</div>
        <div class="medal-sub">{{ medal.sub }}</div>
      </div>

      <div class="results-grid">
        <div class="stat-card green">
          <div class="stat-num">{{ postCorrectCount }}</div>
          <div class="stat-name">Correctas</div>
        </div>
        <div class="stat-card red">
          <div class="stat-num">{{ store.postQuestions.length - postCorrectCount }}</div>
          <div class="stat-name">Por mejorar</div>
        </div>
        <div class="stat-card blue">
          <div class="stat-num">{{ postPct }}%</div>
          <div class="stat-name">Puntaje</div>
        </div>
      </div>

      <div style="margin:24px 0 10px">
        <div class="card-title" style="margin-bottom:14px">📊 Análisis por tema</div>
        <div v-for="(data, name) in topics" :key="name" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;margin-bottom:5px">
            <span style="font-size:.88rem;font-weight:700;color:#374151">{{ name }}</span>
            <span
              style="font-size:.8rem;font-weight:800;font-family:'JetBrains Mono',monospace"
              :style="{ color: topicColor(data) }"
            >{{ data.correct }}/{{ data.total }} · {{ topicPct(data) }}%</span>
          </div>
          <div class="progress-track" style="margin-bottom:0">
            <div
              class="progress-fill"
              :style="{ width: topicPct(data) + '%', background: topicColor(data), transition: 'width 1s 0.3s' }"
            ></div>
          </div>
        </div>
      </div>

      <div style="margin-top:24px">
        <div class="card-title" style="margin-bottom:14px">🎯 Plan de mejora personalizado</div>
        <div class="improvement-list">
          <div v-for="(item, i) in improvements" :key="i" class="imp-item">
            <div class="imp-dot" :class="{ ok: item.ok }"></div>
            <div class="imp-text" v-html="item.text"></div>
          </div>
        </div>
      </div>

      <div style="margin-top:24px">
        <div class="card-title" style="margin-bottom:4px">📈 Tu progreso en {{ areaName }}</div>
        <div style="font-size:.88rem;color:var(--muted);margin-bottom:14px">
          {{ studentName }}, esta es tu evolución: Diagnóstico → Examen final
        </div>
        <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap">
          <div style="text-align:center">
            <div style="font-size:1.5rem;font-weight:900;color:var(--muted)">{{ prePct }}%</div>
            <div style="font-size:.75rem;color:var(--muted);font-weight:700;text-transform:uppercase">Diagnóstico</div>
          </div>
          <div style="font-size:2rem;color:var(--lime)">→</div>
          <div style="text-align:center">
            <div style="font-size:1.5rem;font-weight:900;color:var(--lime)">{{ postPct }}%</div>
            <div style="font-size:.75rem;color:var(--lime);font-weight:700;text-transform:uppercase">Examen</div>
          </div>
        </div>
      </div>

      <div class="actions" style="margin-top:28px">
        <button class="btn btn-secondary" @click="reviewTheory">📖 Repasar teoría</button>
        <button class="btn btn-primary" @click="restart">🔄 Elegir otra área</button>
      </div>
    </div>

    <div v-else class="card" style="text-align:center;padding:40px">
      <p style="color:var(--muted);font-size:1.05rem">No hay resultados disponibles.</p>
      <button class="btn btn-primary" style="margin-top:16px" @click="restart">Ir al inicio</button>
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

const studentName = computed(() => store.studentName || 'Estudiante')
const areaName = computed(() => {
  const a = subjectAreas.find(s => s.id === store.currentArea)
  return a ? a.name : ''
})

const postCorrectCount = computed(() => store.postCorrectCount)
const postPct = computed(() => store.postPct)

const prePct = computed(() => {
  if (store.preQuestions.length === 0) return 0
  return Math.round((store.preScore / store.preQuestions.length) * 100)
})

const medal = computed(() => {
  const p = postPct.value
  if (p >= 90) return { emoji: '🥇', title: '¡Maestro Aritmético!', sub: 'Rendimiento excepcional. ¡Sigue así!' }
  if (p >= 70) return { emoji: '🥈', title: '¡Gran desempeño!', sub: 'Estás en muy buen camino.' }
  if (p >= 50) return { emoji: '🥉', title: '¡Buen comienzo!', sub: 'Con un poco más de práctica lo lograrás.' }
  return { emoji: '📚', title: '¡Sigue estudiando!', sub: 'Revisa la teoría y vuelve a intentarlo.' }
})

const topics = computed(() => {
  const map = {}
  store.postQuestions.forEach((q, i) => {
    if (!map[q.topic]) map[q.topic] = { correct: 0, total: 0 }
    map[q.topic].total++
    if (store.postAnswers[i] === q.ans) map[q.topic].correct++
  })
  return map
})

function topicPct(data) {
  return Math.round((data.correct / data.total) * 100)
}

function topicColor(data) {
  const p = topicPct(data)
  return p >= 70 ? 'var(--lime)' : p >= 40 ? 'var(--gold)' : 'var(--accent)'
}

const improvements = computed(() => {
  const list = []
  const weakTopics = Object.entries(topics.value)
    .filter(([, d]) => (d.correct / d.total) < 0.7)
    .map(([n]) => n)

  if (weakTopics.length === 0) {
    list.push({ ok: true, text: '<strong>¡Dominas todos los temas!</strong> Practica ejercicios de nivel avanzado para consolidar.' })
  } else {
    const tips = {
      'Números Enteros': 'Practica la regla de signos en multiplicación. Recuerda: (−)×(−)=(+). Haz al menos 10 ejercicios.',
      'Signos de Agrupación': 'Trabaja siempre de adentro hacia afuera. Usa lápiz y papel, resuelve cada paréntesis antes del corchete.',
      'Fracciones': 'Repasa cómo hallar el MCM. Practica convertir fracciones a denominador común antes de operar.',
      'Desigualdades': 'Grafica en la recta numérica los valores posibles. Recuerda excluir los extremos si el signo es < o >.',
      'Expresiones con variables': 'Sustituye paso a paso y respeta la jerarquía de operaciones (PEMDAS).'
    }
    weakTopics.forEach(t => {
      list.push({ ok: false, text: `<strong>${t}:</strong> ${tips[t] || 'Revisa los ejemplos del módulo teórico y practica más ejercicios.'}` })
    })
  }

  if (postPct.value < 100) {
    list.push({ ok: false, text: '<strong>Consejo general:</strong> Vuelve a la sección de Teoría, lee los ejemplos y repite el examen.' })
  }
  list.push({ ok: true, text: `<strong>¡Subiste ${store.xp} XP en esta sesión!</strong> Cada punto representa un concepto aprendido.` })

  return list
})

onMounted(() => {
  if (!store.currentArea) {
    const areaFromRoute = route.params.areaId
    if (areaFromRoute) {
      store.setArea(areaFromRoute)
    } else {
      router.replace({ name: 'welcome' })
    }
  }
})

function reviewTheory() {
  router.push({ name: 'theory', params: { areaId: store.currentArea } })
}

function restart() {
  store.resetArea()
  router.push({ name: 'welcome' })
}
</script>
