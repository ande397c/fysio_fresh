<script setup lang="ts">
import { ref } from "vue";
import IconElipsis from "./icons/IconElipsis.vue";
import IconPlus from "./icons/IconPlus.vue";
import IconDelete from "./icons/IconDelete.vue";

defineProps<{
 title: string;
}>();

const emit = defineEmits<{
 (e: "addTask", card: { title: string; desc: string }): void;
}>();

const isCreatingNewCard = ref<boolean>(false);
const cardTitle = ref<string>("");
const cardDesc = ref<string>("");

const toggle = () => {
 isCreatingNewCard.value = !isCreatingNewCard.value;
 cardTitle.value = ""
 cardDesc.value = ""
};

const submit = () => {
 emit("addTask", {
  title: cardTitle.value,
  desc: cardDesc.value,
 });
 toggle();
};
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
   <v-toolbar v-if="!isCreatingNewCard" density="compact" class="bg-purple-darken-2 px-4" @click="toggle">
    <IconPlus />
    <v-toolbar-title class="text-subtitle-1">Add another card</v-toolbar-title>
   </v-toolbar>
  </v-card>
  <v-form v-if="isCreatingNewCard" @submit.prevent="submit">
   <v-container class="pt-0">
    <v-text-field v-model="cardTitle" label="Card title" variant="outlined" />
    <v-textarea v-model="cardDesc" label="Card description" rows="2" auto-grow variant="outlined"></v-textarea>
    <div class="mt-2">
     <v-btn type="submit" class="bg-green-darken-3">Add card</v-btn>
     <v-btn class="ml-2" type="button" @click="toggle">
      <IconDelete />
     </v-btn>
    </div>
   </v-container>
  </v-form>
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
