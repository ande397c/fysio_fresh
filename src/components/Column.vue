<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="bg-purple-darken-2 pa-3 ma-2 rounded" style="width: 18rem;">
    <div class="d-flex justify-space-between align-center mb-2">
      <p>{{ title }}</p>
      <p>..</p>
    </div>
    <slot></slot>
  </div>
</template>
