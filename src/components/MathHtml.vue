<template>
  <div v-if="tag === 'div'" v-html="rendered" :class="klass" />
  <span v-else v-html="rendered" :class="klass" />
</template>

<script setup>
import { computed } from 'vue'
import { renderMath } from '../utils/math.js'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'span' },
  klass: { type: String, default: '' },
})

const rendered = computed(() => renderMath(props.text))
</script>
