<script setup lang="ts">
import IconeElipsis from "../components/icons/IconeElipsis.vue";
defineProps<{
 title: string;
}>();
</script>

<template>
 <div class="bg-purple-darken-2 ma-2 mb-0 rounded d-flex flex-column" style="width: 20rem; height: 100%">
  <div class="d-flex justify-space-between align-center px-3 pt-2">
   <p>{{ title }}</p>
   <IconeElipsis />
  </div>
  <div class="pa-3 flex-grow-1">
   <slot />
  </div>
  <v-card class="mx-auto mt-2" height="fitContent" width="100%" hover>
   <v-toolbar density="compact" class="bg-purple-darken-2">
    <v-app-bar-nav-icon variant="text">
     <IconeElipsis />
    </v-app-bar-nav-icon>

    <v-toolbar-title class="text-subtitle-1">Add another card</v-toolbar-title>
   </v-toolbar>
  </v-card>
 </div>
</template>

<style scoped>
/* Ensure the container takes full height */
.bg-purple-darken-2 {
 display: flex;
 flex-direction: column;
 height: 100%;
}

/* Allow the main content to grow and push the card to the bottom */
.flex-grow-1 {
 flex-grow: 1;
}
</style>
