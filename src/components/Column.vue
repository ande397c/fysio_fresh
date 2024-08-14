<script setup lang="ts">
import { computed, ref } from "vue";
import IconPlus from "./icons/IconPlus.vue";
import IconDelete from "./icons/IconDelete.vue";

defineProps<{
 title: string;
}>();


const isCreatingNewTask = ref<boolean>(false);
const cardTitle = ref<string>("");
const cardDesc = ref<string>("");

const toggle = () => {
 isCreatingNewTask.value = !isCreatingNewTask.value;
 cardTitle.value = "";
 cardDesc.value = "";
};

const isSubmitDisabled = computed(() => {
 return cardTitle.value.trim() === "" || cardDesc.value.trim() === "";
});

const emit = defineEmits<{
 (e: "addTask", card: { title: string; desc: string }): void;
 (e: "removeList"): void;
}>();

const submit = () => {
 emit("addTask", {
  title: cardTitle.value,
  desc: cardDesc.value,
 });
 toggle();
};
</script>

<template>
 <div class="bg-grey-lighten-2 ma-2 mb-0 rounded d-flex flex-column column">
  <div class="d-flex justify-space-between align-center px-4 pt-2">
   <h5 class="font-weight-bold text-subtitle-1">{{ title }}</h5>
   <v-btn density="compact" icon="mdi-plus" variant="text" @click="emit('removeList')">
    <IconDelete />
    <v-tooltip content-class="bg-brown-darken-1" activator="parent" location="top">Delete list</v-tooltip>
   </v-btn>
  </div>
  <div class="pa-3 flex-grow-1 overflow-y-auto column-container">
    <slot />
  </div>
  <v-card class="mx-auto mt-2 bg-grey-lighten-2" width="100%" variant="flat" hover >
   <v-toolbar v-if="!isCreatingNewTask" density="compact" class="bg-grey-lighten-2 px-4" @click="toggle">
    <IconPlus />
    <v-toolbar-title class="text-subtitle-1">Add card</v-toolbar-title>
   </v-toolbar>
  </v-card>
  <v-form v-if="isCreatingNewTask" @submit.prevent="submit">
   <v-container class="pt-0">
    <v-text-field v-model="cardTitle" label="Card title" variant="outlined" />
    <v-textarea v-model="cardDesc" label="Card description" rows="1" auto-grow variant="outlined"></v-textarea>
    <div class="mt-2">
     <v-btn type="submit" size="small" variant="tonal" class="bg-green-darken-3" :disabled="isSubmitDisabled">Add card</v-btn>
     <v-btn icon="$vuetify" density="compact" variant="text" class="ml-4" type="button" @click="toggle">
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
