import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeScreen from '../components/WelcomeScreen.vue'
import PreQuiz from '../components/PreQuiz.vue'
import Theory from '../components/Theory.vue'
import PostQuiz from '../components/PostQuiz.vue'
import Results from '../components/Results.vue'
import UniversitySim from '../components/UniversitySim.vue'

const routes = [
  { path: '/', name: 'welcome', component: WelcomeScreen },
  { path: '/area/:areaId/pre-quiz', name: 'pre', component: PreQuiz },
  { path: '/area/:areaId/theory/:topicIndex?', name: 'theory', component: Theory },
  { path: '/area/:areaId/post-quiz', name: 'post', component: PostQuiz },
  { path: '/area/:areaId/results', name: 'results', component: Results },
  { path: '/universidad/:universityId/simulacro', name: 'unisim', component: UniversitySim },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
