import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { theoryCards } from '../data/theoryCards.js'
import { pickQuestions, shuffleOptions } from '../data/questionBank.js'

const PRE_QUIZ_COUNT = 6
const POST_QUIZ_COUNT = 9

export const useGameStore = defineStore('game', () => {
  const studentName = ref(localStorage.getItem('mathquest_name') || '')
  const currentArea = ref(null)

  // Pre-quiz
  const preQuestions = ref([])
  const preAnswers = ref([])
  const currentPreQ = ref(0)
  const preScore = ref(0)

  // Post-quiz
  const postQuestions = ref([])
  const postAnswers = ref([])
  const postAnswered = ref([])
  const xp = ref(0)
  const postScore = ref(0)

  // Theory
  const thDone = ref([])

  const areaTheoryCards = computed(() =>
    theoryCards.filter(c => c.area === currentArea.value)
  )

  const preProgress = computed(() => {
    if (preQuestions.value.length === 0) return 0
    return (currentPreQ.value / preQuestions.value.length) * 100
  })

  const postProgress = computed(() => {
    if (postQuestions.value.length === 0) return 0
    const answered = postAnswered.value.filter(Boolean).length
    return (answered / postQuestions.value.length) * 100
  })

  const postAnsweredCount = computed(() => postAnswered.value.filter(Boolean).length)
  const allPostAnswered = computed(() =>
    postQuestions.value.length > 0 && postAnswered.value.every(Boolean)
  )

  const allTheoryDone = computed(() =>
    areaTheoryCards.value.length > 0 && areaTheoryCards.value.every((_, i) => thDone.value[i])
  )

  const thDoneCount = computed(() => thDone.value.filter(Boolean).length)

  const postPct = computed(() => {
    if (postQuestions.value.length === 0) return 0
    const score = postAnswers.value.filter((a, i) => a === postQuestions.value[i].ans).length
    return Math.round((score / postQuestions.value.length) * 100)
  })

  const postCorrectCount = computed(() =>
    postAnswers.value.filter((a, i) => a === postQuestions.value[i].ans).length
  )

  function setStudentName(name) {
    studentName.value = name
    localStorage.setItem('mathquest_name', name)
  }

  function setArea(areaId) {
    currentArea.value = areaId
    const areaCards = theoryCards.filter(c => c.area === areaId)
    thDone.value = new Array(areaCards.length).fill(false)
  }

  function initPreQuiz() {
    const raw = pickQuestions(currentArea.value, 'diagnostic', PRE_QUIZ_COUNT)
    preQuestions.value = raw.map(shuffleOptions)
    preAnswers.value = new Array(preQuestions.value.length).fill(null)
    currentPreQ.value = 0
    preScore.value = 0
  }

  function setPreAnswer(index, value) {
    preAnswers.value[index] = value
  }

  function nextPreQuestion() {
    if (currentPreQ.value < preQuestions.value.length - 1) {
      currentPreQ.value++
    }
  }

  function prevPreQuestion() {
    if (currentPreQ.value > 0) {
      currentPreQ.value--
    }
  }

  function finishPreQuiz() {
    let score = 0
    preQuestions.value.forEach((q, i) => {
      if (preAnswers.value[i] === q.ans) score++
    })
    preScore.value = score
  }

  function initPostQuiz() {
    const raw = pickQuestions(currentArea.value, 'exam', POST_QUIZ_COUNT)
    postQuestions.value = raw.map(shuffleOptions)
    postAnswers.value = new Array(postQuestions.value.length).fill(null)
    postAnswered.value = new Array(postQuestions.value.length).fill(false)
    xp.value = 0
    postScore.value = 0
  }

  function answerPostQuestion(qi, oi) {
    if (postAnswered.value[qi]) return
    postAnswered.value[qi] = true
    postAnswers.value[qi] = oi
    const q = postQuestions.value[qi]
    if (oi === q.ans) {
      const xpMap = { basico: 10, medio: 20, avanzado: 30 }
      xp.value += xpMap[q.level] || 10
    }
  }

  function finishPostQuiz() {
    postScore.value = postAnswers.value.filter((a, i) => a === postQuestions.value[i].ans).length
  }

  function markTheoryDone(index) {
    thDone.value[index] = true
  }

  function resetAll() {
    const name = studentName.value
    studentName.value = ''
    localStorage.removeItem('mathquest_name')
    currentArea.value = null
    preQuestions.value = []
    preAnswers.value = []
    currentPreQ.value = 0
    preScore.value = 0
    postQuestions.value = []
    postAnswers.value = []
    postAnswered.value = []
    xp.value = 0
    postScore.value = 0
    thDone.value = []
  }

  function resetArea() {
    currentArea.value = null
    preQuestions.value = []
    preAnswers.value = []
    currentPreQ.value = 0
    preScore.value = 0
    postQuestions.value = []
    postAnswers.value = []
    postAnswered.value = []
    xp.value = 0
    postScore.value = 0
    thDone.value = []
  }

  function logout() {
    studentName.value = ''
    localStorage.removeItem('mathquest_name')
    resetArea()
  }

  return {
    studentName, currentArea,
    preQuestions, preAnswers, currentPreQ, preScore,
    postQuestions, postAnswers, postAnswered, xp, postScore,
    thDone,
    areaTheoryCards,
    preProgress, postProgress, postAnsweredCount, allPostAnswered,
    allTheoryDone, thDoneCount, postPct, postCorrectCount,
    setStudentName, setArea,
    initPreQuiz, setPreAnswer, nextPreQuestion, prevPreQuestion, finishPreQuiz,
    initPostQuiz, answerPostQuestion, finishPostQuiz,
    markTheoryDone, resetAll, resetArea, logout,
  }
})
