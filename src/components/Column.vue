<script setup lang="ts">
import IconElipsis from "./icons/IconElipsis.vue";
import IconPlus from "./icons/IconPlus.vue";
defineProps<{
 title: string;
}>();
</script>

<template>
 <div class="bg-purple-darken-2 ma-2 mb-0 rounded d-flex flex-column column">
  <div class="d-flex justify-space-between align-center px-3 pt-2">
   <p>{{ title }}</p>
   <IconElipsis />
  </div>
  <div class="pa-3 flex-grow-1 overflow-y-auto column-container">
   <slot />
  </div>
  <v-card class="mx-auto mt-2" width="100%" hover>
   <v-toolbar density="compact" class="bg-purple-darken-2 px-4" @click="$emit('addCard')">
    <IconPlus />
    <v-toolbar-title class="text-subtitle-1">Add another card</v-toolbar-title>
   </v-toolbar>
  </v-card>
 </div>
</template>

<style scoped>
.column {
 max-width: 20rem;
 width: 20rem;
 height: fit-content;
}

.column-container {
 max-height: 80vh;
}
</style>
