<script setup lang="ts">
import IconDelete from "@/components/icons/IconDelete.vue";

defineProps<{
 title: string;
 desc: string;
}>();
</script>

<template>
 <v-card class="card mx-auto position-relative bg-blue-grey mt-3 cursor-move">
  <v-card-title class="pb-0 text-subtitle-1 font-weight-bold text-blue-grey-lighten-5">{{ title }}</v-card-title>
  <v-card-text class="pt-1 pb-1 pr-4 text-blue-grey-lighten-4">
   {{ desc }}
   <v-card-actions class="card-actions position-absolute top-0 right-0">
    <v-btn icon="mdi-delete" class="" size="small" @click="$emit('removeTask')">
     <IconDelete />
     <v-tooltip content-class="bg-grey-darken-2" activator="parent" location="end">Delete task</v-tooltip>
    </v-btn>
   </v-card-actions>
  </v-card-text>
 </v-card>
</template>

<style scoped>
.card-actions {
 transition: visibility 0.1s;
 visibility: hidden;
}

.card:hover .card-actions {
 visibility: visible;
}
</style>
