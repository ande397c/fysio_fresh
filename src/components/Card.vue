<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <v-card class="my-2">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
     {{ desc }}
    </v-card-text>
  </v-card>
</template>
