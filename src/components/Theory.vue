<template>
  <div class="phase-content">
    <div class="phase-header">
      <div class="phase-num" style="display:flex;justify-content:space-between;align-items:center;width:100%;max-width:480px;margin:0 auto 10px">
        <span>Fase 2 de 3 · {{ areaName }}</span>
        <button class="btn-close" @click="goBack" title="Volver al inicio">✕</button>
      </div>
      <div class="phase-title">Teoría Interactiva</div>
      <div class="phase-desc">Explora cada tema, voltea las cards, resuelve el mini-quiz y desbloquea el siguiente módulo.</div>
    </div>

    <template v-if="cards.length > 0">
      <div class="th-tracker">
        <div class="th-tracker-inner">
          <div
            v-for="(_, i) in cards"
            :key="i"
            class="th-dot"
            :class="{ done: store.thDone[i] }"
          ></div>
        </div>
        <div class="th-tracker-bar">
          <div class="th-tracker-fill" :style="{ width: pct + '%' }"></div>
        </div>
        <div class="th-tracker-label">{{ store.thDoneCount }} de {{ cards.length }} temas dominados</div>
      </div>

      <div v-if="!detailOpen" class="th-grid">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="flip-wrap"
          :class="[card.color, { flipped: flipped[i] || store.thDone[i] }]"
          @click="toggleFlip(i)"
        >
          <div class="flip-inner">
            <div class="flip-face flip-front">
              <span
                class="ff-badge"
                :class="store.thDone[i] ? 'done' : 'locked'"
              >{{ store.thDone[i] ? '✓ Dominado' : 'Nuevo' }}</span>
              <div>
                <div class="ff-icon">{{ card.icon }}</div>
                <div class="ff-title">{{ card.title }}</div>
                <div class="ff-sub">{{ card.sub }}</div>
              </div>
            </div>
            <div class="flip-face flip-back">
              <div class="fb-title">Regla clave</div>
              <div class="fb-rule">{{ card.rule }}</div>
              <div class="fb-action" @click.stop="openDetail(i)">
                Ver teoría completa + mini-quiz →
              </div>
            </div>
          </div>
        </div>
      </div>

      <TheoryDetail
        v-if="detailOpen"
        :card-index="detailIndex"
        @close="closeDetail"
        @done="onTheoryDone"
      />

      <div class="actions">
        <button class="btn btn-secondary" @click="goBack">← Volver al inicio</button>
        <button v-if="store.allTheoryDone" class="btn btn-primary" @click="goToPost">
          ¡Listo para el examen! →
        </button>
      </div>
    </template>

    <div v-else class="card" style="text-align:center;padding:40px">
      <p style="color:var(--muted);font-size:1.05rem">No hay temas disponibles para esta área.</p>
      <button class="btn btn-secondary" style="margin-top:16px" @click="goBack">← Volver al inicio</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { subjectAreas } from '../data/subjectAreas.js'
import TheoryDetail from './TheoryDetail.vue'

const router = useRouter()
const route = useRoute()
const store = useGameStore()

const cards = computed(() => store.areaTheoryCards)
const areaName = computed(() => {
  const a = subjectAreas.find(s => s.id === store.currentArea)
  return a ? a.name : ''
})

const flipped = ref([])
const detailOpen = ref(false)
const detailIndex = ref(0)

const pct = computed(() => {
  if (cards.value.length === 0) return 0
  return Math.round((store.thDoneCount / cards.value.length) * 100)
})

onMounted(() => {
  if (!store.currentArea) {
    router.replace({ name: 'welcome' })
    return
  }
  flipped.value = new Array(cards.value.length).fill(false)

  const idx = route.params.topicIndex
  if (idx !== undefined && idx !== '') {
    const n = parseInt(idx, 10)
    if (!isNaN(n) && n >= 0 && n < cards.value.length) {
      openDetail(n)
    }
  }
})

function toggleFlip(i) {
  if (detailOpen.value) return
  flipped.value[i] = !flipped.value[i]
}

function openDetail(i) {
  detailIndex.value = i
  detailOpen.value = true
}

function closeDetail() {
  detailOpen.value = false
}

function onTheoryDone() {
  closeDetail()
}

function goBack() {
  router.push({ name: 'welcome' })
}

function goToPost() {
  store.initPostQuiz()
  router.push({ name: 'post', params: { areaId: store.currentArea } })
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
