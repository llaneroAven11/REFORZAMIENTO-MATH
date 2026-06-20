<template>
  <div class="th-detail">
    <div class="th-detail-card">
      <div class="td-header" :style="{ background: card.headerBg }">
        <div class="td-icon">{{ card.icon }}</div>
        <div>
          <div class="td-htitle">{{ card.title }}</div>
          <div class="td-hsub">{{ card.sub }}</div>
        </div>
      </div>
      <div class="td-body">
        <template v-for="(sec, si) in card.sections" :key="si">
          <div v-if="sec.type === 'steps'" style="margin-bottom:20px">
            <div class="td-step-title">{{ sec.title }}</div>
            <div
              v-for="(step, sti) in sec.steps"
              :key="sti"
              class="td-step"
            >
              <div class="td-step-num">{{ sti + 1 }}</div>
              <div class="td-step-content">
                <h5>{{ step.h }}</h5>
                <p>{{ step.p }}</p>
              </div>
            </div>
          </div>
          <div v-else-if="sec.type === 'rule'" class="td-rule" v-html="br(sec.content)"></div>
          <div v-else-if="sec.type === 'example'" class="td-example" v-html="br(sec.content)"></div>
          <div v-else-if="sec.type === 'warn'" class="td-warn">{{ sec.content }}</div>
        </template>

        <div class="td-quiz">
          <div class="td-quiz-title">⚡ Mini-quiz — ¿Lo entendiste?</div>
          <div class="tq-question">{{ card.quiz.q }}</div>
          <div class="tq-opts">
            <button
              v-for="(opt, oi) in card.quiz.opts"
              :key="oi"
              class="tq-opt"
              :class="quizClasses(oi)"
              :disabled="answered"
              @click="answer(oi)"
            >
              <span class="tq-letter">{{ letters[oi] }}</span>{{ opt }}
            </button>
          </div>
          <div v-if="resultMsg" class="tq-result show" :class="resultOk ? 'ok' : 'err'">
            {{ resultMsg }}
          </div>
        </div>
      </div>
    </div>
    <div class="actions" style="margin-top:12px">
      <button class="btn btn-secondary" @click="$emit('close')">← Volver a temas</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/gameStore'

const props = defineProps({ cardIndex: { type: Number, required: true } })
const emit = defineEmits(['close', 'done'])
const store = useGameStore()

const card = computed(() => store.areaTheoryCards[props.cardIndex])
const letters = ['A', 'B', 'C', 'D']
const answered = ref(false)
const resultMsg = ref('')
const resultOk = ref(false)
const chosen = ref(-1)

function br(text) {
  return text.replace(/\n/g, '<br>')
}

function quizClasses(oi) {
  if (!answered.value) return {}
  return {
    'tq-correct': oi === card.value.quiz.ans,
    'tq-wrong': oi === chosen.value && oi !== card.value.quiz.ans,
  }
}

function answer(oi) {
  if (answered.value) return
  answered.value = true
  chosen.value = oi
  const q = card.value.quiz
  if (oi === q.ans) {
    resultOk.value = true
    resultMsg.value = `✅ ¡Correcto! ${q.exp}`
    store.markTheoryDone(props.cardIndex)
    setTimeout(() => {
      emit('done')
    }, 1200)
  } else {
    resultOk.value = false
    resultMsg.value = `❌ Respuesta correcta: ${letters[q.ans]}. ${q.exp} Vuelve a repasar la teoría e intenta de nuevo.`
    setTimeout(() => {
      answered.value = false
      chosen.value = -1
      resultMsg.value = ''
    }, 2800)
  }
}
</script>

<style scoped>
.td-step-title {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--muted);
  margin-bottom: 12px;
}
</style>
