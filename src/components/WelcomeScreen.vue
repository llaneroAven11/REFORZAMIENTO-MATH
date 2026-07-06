<template>
  <div class="hero">
    <h1>MathQuest</h1>
    <p>Elige un área de matemática para practicar. Revisa la teoría, resuelve el quiz de cada tema y luego rinde el examen final.</p>

    <div v-if="!store.studentName" class="name-form">
      <label for="studentName">¿Cómo te llamas?</label>
      <div class="name-input-wrap">
        <input
          id="studentName"
          v-model.trim="name"
          type="text"
          placeholder="Escribe tu nombre..."
          maxlength="40"
          @keyup.enter="go"
        />
        <button class="btn btn-primary" :disabled="!name" @click="go">
          ¡Entrar! →
        </button>
      </div>
    </div>

    <template v-else>
      <div class="top-bar">
        <span class="welcome-user">{{ store.studentName }}</span>
        <button class="btn-logout" @click="logout">Salir ✕</button>
      </div>
      <div class="section-label">Áreas de matemática</div>
      <div class="area-grid">
        <div
          v-for="area in areas"
          :key="area.id"
          class="area-card"
          :style="{ '--area-bg': area.gradient }"
          @click="selectArea(area.id)"
        >
          <div class="area-icon">{{ area.icon }}</div>
          <div class="area-info">
            <div class="area-title">{{ area.name }}</div>
            <div class="area-desc">{{ area.desc }}</div>
          </div>
          <div class="area-topics-count">
            {{ topicsCount(area.id) }} {{ topicsCount(area.id) === 1 ? 'tema' : 'temas' }}
          </div>
        </div>
      </div>

      <div class="section-label" style="margin-top:48px">Simulacros de admisión</div>
      <div class="area-grid">
        <div
          v-for="uni in universidades"
          :key="uni.id"
          class="area-card"
          :style="{ '--area-bg': uni.gradient }"
          @click="selectUni(uni.id)"
        >
          <div class="area-icon">{{ uni.icon }}</div>
          <div class="area-info">
            <div class="area-title">{{ uni.name }}</div>
            <div class="area-desc">{{ uni.fullName }}</div>
          </div>
          <div class="area-topics-count">{{ uni.subjects.length }} materias</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/gameStore'
import { subjectAreas } from '../data/subjectAreas.js'
import { theoryCards } from '../data/theoryCards.js'
import { universities } from '../data/universities.js'

const router = useRouter()
const store = useGameStore()
const areas = subjectAreas
const universidades = universities
const name = ref('')

function go() {
  if (!name.value) return
  store.setStudentName(name.value)
}

function topicsCount(areaId) {
  return theoryCards.filter(c => c.area === areaId).length
}

function selectArea(areaId) {
  store.setArea(areaId)
  router.push({ name: 'theory', params: { areaId } })
}

function selectUni(uniId) {
  store.initUniQuiz(uniId)
  router.push({ name: 'unisim', params: { universityId: uniId } })
}

function logout() {
  store.logout()
}
</script>

<style scoped>
.name-form {
  margin: 28px auto 32px;
  max-width: 440px;
  text-align: center;
}
.name-form label {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(248, 249, 255, 0.7);
  margin-bottom: 12px;
}
.name-input-wrap {
  display: flex;
  gap: 10px;
}
.name-input-wrap input {
  flex: 1;
  padding: 13px 20px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  transition: border-color 0.2s;
}
.name-input-wrap input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.name-input-wrap input:focus {
  border-color: var(--teal);
}

.section-label {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(248, 249, 255, 0.4);
  margin: 36px 0 18px;
}

.area-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.area-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 24px 22px;
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
  text-align: left;
}
.area-card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  background: var(--area-bg, transparent);
  transition: opacity 0.3s;
  border-radius: 18px;
}
.area-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.area-card:hover::before {
  opacity: 0.1;
}

.area-icon {
  font-size: 2.6rem;
  margin-bottom: 12px;
  position: relative;
}
.area-info {
  position: relative;
}
.area-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 4px;
}
.area-desc {
  font-size: 0.82rem;
  color: rgba(248, 249, 255, 0.5);
  font-weight: 600;
  line-height: 1.4;
}
.area-topics-count {
  margin-top: 14px;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--teal);
  position: relative;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.welcome-user {
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(248, 249, 255, 0.6);
}
.btn-logout {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(248, 249, 255, 0.5);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Nunito', sans-serif;
}
.btn-logout:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(233, 69, 96, 0.1);
}
</style>
