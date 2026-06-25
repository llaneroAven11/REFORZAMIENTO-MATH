<template>
  <div class="td-video">
    <div class="td-video-title">📺 Video complementario</div>
    <div class="td-video-wrap">
      <iframe
        :src="`https://www.youtube.com/embed/${video.id}`"
        :title="video.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    <a
      :href="`https://www.youtube.com/watch?v=${video.id}`"
      target="_blank"
      rel="noopener"
      class="td-video-link"
    >
      {{ video.title }} — {{ video.author }} ↗
    </a>
  </div>
</template>

<script setup>
defineProps({ video: { type: Object, required: true } })
</script>
