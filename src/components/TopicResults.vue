<template>
  <div class="phase-content">
    <div class="phase-header">
      <div class="phase-title">Resultados del Tema</div>
      <div class="phase-desc" style="font-size:1.1rem"><strong>{{ store.topicExamResult ? store.topicQuizTopic : '' }}</strong></div>
    </div>

    <div class="results-grid">
      <div class="card result-card">
        <div class="rc-icon">📋</div>
        <div class="rc-label">Cuestionario Diagnóstico</div>
        <div class="rc-score">{{ diag.score }}/{{ diag.total }}</div>
        <div class="rc-pct" :class="pctClass(diag.pct)">{{ diag.pct }}%</div>
        <div class="rc-desc">Antes de estudiar</div>
      </div>

      <div class="card result-card">
        <div class="rc-icon">📝</div>
        <div class="rc-label">Cuestionario de Salida</div>
        <div class="rc-score">{{ exam.score }}/{{ exam.total }}</div>
        <div class="rc-pct" :class="pctClass(exam.pct)">{{ exam.pct }}%</div>
        <div class="rc-desc">Después de estudiar</div>
      </div>
    </div>

    <div v-if="improved" class="msg msg-ok" style="text-align:center;max-width:480px;margin:0 auto 24px">
      ¡Mejoraste! {{ exam.pct - diag.pct > 0 ? '+' + (exam.pct - diag.pct) : (exam.pct - diag.pct) }}%
    </div>
    <div v-else class="msg msg-warn" style="text-align:center;max-width:480px;margin:0 auto 24px">
      Sigue practicando, puedes mejorar.
    </div>

    <div class="actions">
      <button class="btn btn-primary" @click="$emit('continue')">Continuar →</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGameStore } from '../stores/gameStore'

defineEmits(['continue'])
const store = useGameStore()

const diag = computed(() => store.topicDiagResult || { score: 0, total: 0, pct: 0 })
const exam = computed(() => store.topicExamResult || { score: 0, total: 0, pct: 0 })
const improved = computed(() => exam.value.pct >= diag.value.pct)

function pctClass(pct) {
  if (pct >= 80) return 'pct-great'
  if (pct >= 50) return 'pct-ok'
  return 'pct-low'
}
</script>

<style scoped>
.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 520px;
  margin: 28px auto;
}
.result-card {
  text-align: center;
  padding: 28px 20px;
}
.rc-icon { font-size: 2rem; margin-bottom: 8px; }
.rc-label { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); margin-bottom: 12px; }
.rc-score { font-size: 2.2rem; font-weight: 900; color: #fff; }
.rc-pct { font-size: 0.95rem; font-weight: 800; margin-top: 4px; }
.rc-pct.pct-great { color: #4ade80; }
.rc-pct.pct-ok { color: #fbbf24; }
.rc-pct.pct-low { color: #f87171; }
.rc-desc { font-size: 0.72rem; color: var(--muted); margin-top: 8px; }

.msg { padding: 14px 20px; border-radius: 12px; font-weight: 700; font-size: 0.95rem; }
.msg-ok { background: rgba(74,222,128,0.1); color: #4ade80; border: 1px solid rgba(74,222,128,0.2); }
.msg-warn { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
</style>
