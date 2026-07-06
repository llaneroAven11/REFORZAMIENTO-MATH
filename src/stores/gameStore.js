import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { theoryCards } from '../data/theoryCards.js'
import { pickQuestions, pickQuestionsByTopic, shuffleOptions } from '../data/questionBank.js'
import { pickUniQuestions, getUniSubjectCounts } from '../data/universityQuestions.js'

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
  const attemptedTopics = ref([])

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
    attemptedTopics.value = new Array(areaCards.length).fill(false)
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

  // Topic quiz state (shared for diagnostic and exam)
  const topicQuizQuestions = ref([])
  const topicQuizAnswers = ref([])
  const topicQuizCurrent = ref(0)
  const topicQuizScore = ref(0)
  const topicQuizMode = ref('')
  const topicQuizTopic = ref('')

  const topicDiagResult = ref(null)
  const topicExamResult = ref(null)

  const topicAlias = {
    'Operaciones con Fracciones': 'Fracciones',
    'Desigualdades con Enteros': 'Desigualdades',
    'Expresiones Algebraicas': 'Expresiones con variables',
  }

  const topicQuizProgress = computed(() => {
    if (topicQuizQuestions.value.length === 0) return 0
    return ((topicQuizCurrent.value + 1) / topicQuizQuestions.value.length) * 100
  })

  const isLastTopicQuizQuestion = computed(() =>
    topicQuizCurrent.value === topicQuizQuestions.value.length - 1
  )

  const allTopicQuizAnswered = computed(() =>
    topicQuizQuestions.value.length > 0 && topicQuizAnswers.value.every(a => a !== null)
  )

  function initTopicQuiz(areaId, topic, mode) {
    const dbTopic = topicAlias[topic] || topic
    const raw = pickQuestionsByTopic(areaId, dbTopic, mode)
    if (raw.length === 0) {
      const fallback = pickQuestions(areaId, mode, 4)
      topicQuizQuestions.value = fallback.map(shuffleOptions)
    } else {
      topicQuizQuestions.value = raw.map(shuffleOptions)
    }
    topicQuizAnswers.value = new Array(topicQuizQuestions.value.length).fill(null)
    topicQuizCurrent.value = 0
    topicQuizScore.value = 0
    topicQuizMode.value = mode
    topicQuizTopic.value = topic
    if (mode === 'diagnostic') topicDiagResult.value = null
    else topicExamResult.value = null
  }

  function setTopicQuizAnswer(index, value) {
    topicQuizAnswers.value[index] = value
  }

  function nextTopicQuiz() {
    if (topicQuizCurrent.value < topicQuizQuestions.value.length - 1) {
      topicQuizCurrent.value++
    }
  }

  function prevTopicQuiz() {
    if (topicQuizCurrent.value > 0) {
      topicQuizCurrent.value--
    }
  }

  function finishTopicQuiz() {
    let score = 0
    topicQuizQuestions.value.forEach((q, i) => {
      if (topicQuizAnswers.value[i] === q.ans) score++
    })
    topicQuizScore.value = score
    const result = { score, total: topicQuizQuestions.value.length, pct: Math.round((score / topicQuizQuestions.value.length) * 100) }
    if (topicQuizMode.value === 'diagnostic') topicDiagResult.value = result
    else topicExamResult.value = result
  }

  function markTopicAttempted(index) {
    attemptedTopics.value[index] = true
  }

  function markTheoryDone(index) {
    thDone.value[index] = true
  }

  // University sim state
  const uniQuestions = ref([])
  const uniAnswers = ref([])
  const uniAnswered = ref([])

  const uniAllAnswered = computed(() =>
    uniQuestions.value.length > 0 && uniAnswered.value.every(Boolean)
  )

  const uniAnsweredCount = computed(() => uniAnswered.value.filter(Boolean).length)

  const uniScore = ref(0)
  const uniResults = ref(null)

  function initUniQuiz(universityId) {
    const qs = pickUniQuestions(universityId)
    uniQuestions.value = qs
    uniAnswers.value = new Array(qs.length).fill(null)
    uniAnswered.value = new Array(qs.length).fill(false)
    uniScore.value = 0
    uniResults.value = null
  }

  function answerUniQuestion(qi, oi) {
    if (uniAnswered.value[qi]) return
    uniAnswered.value[qi] = true
    uniAnswers.value[qi] = oi
  }

  function finishUniQuiz() {
    const correct = uniAnswers.value.filter((a, i) => a === uniQuestions.value[i].ans).length
    uniScore.value = correct
    const subjects = {}
    uniQuestions.value.forEach((q, i) => {
      if (!subjects[q.subject]) subjects[q.subject] = { correct: 0, total: 0 }
      subjects[q.subject].total++
      if (uniAnswers.value[i] === q.ans) subjects[q.subject].correct++
    })
    uniResults.value = {
      score: correct,
      total: uniQuestions.value.length,
      pct: Math.round((correct / uniQuestions.value.length) * 100),
      subjects,
    }
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
    attemptedTopics.value = []
    topicQuizQuestions.value = []
    topicQuizAnswers.value = []
    topicQuizCurrent.value = 0
    topicQuizScore.value = 0
    topicQuizMode.value = ''
    topicQuizTopic.value = ''
    topicDiagResult.value = null
    topicExamResult.value = null
    uniQuestions.value = []
    uniAnswers.value = []
    uniAnswered.value = []
    uniScore.value = 0
    uniResults.value = null
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
    topicQuizQuestions.value = []
    topicQuizAnswers.value = []
    topicQuizCurrent.value = 0
    topicQuizScore.value = 0
    topicQuizMode.value = ''
    topicQuizTopic.value = ''
    topicDiagResult.value = null
    topicExamResult.value = null
    uniQuestions.value = []
    uniAnswers.value = []
    uniAnswered.value = []
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
    thDone, attemptedTopics,
    topicQuizQuestions, topicQuizAnswers, topicQuizCurrent, topicQuizScore,
    topicQuizMode, topicQuizTopic, topicQuizProgress,
    topicDiagResult, topicExamResult,
    isLastTopicQuizQuestion, allTopicQuizAnswered,
    areaTheoryCards,
    preProgress, postProgress, postAnsweredCount, allPostAnswered,
    allTheoryDone, thDoneCount, postPct, postCorrectCount,
    setStudentName, setArea,
    initPreQuiz, setPreAnswer, nextPreQuestion, prevPreQuestion, finishPreQuiz,
    initPostQuiz, answerPostQuestion, finishPostQuiz,
    initTopicQuiz, setTopicQuizAnswer, nextTopicQuiz, prevTopicQuiz, finishTopicQuiz,
    markTopicAttempted, markTheoryDone, resetAll, resetArea, logout,
    uniQuestions, uniAnswers, uniAnswered, uniAllAnswered, uniAnsweredCount,
    uniScore, uniResults,
    initUniQuiz, answerUniQuestion, finishUniQuiz,
  }
})
