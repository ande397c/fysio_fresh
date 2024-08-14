<script setup lang="ts">
import { computed, ref } from "vue";
import IconPlus from "./icons/IconPlus.vue";
import IconDelete from "./icons/IconDelete.vue";

const isCreatingNewColumn = ref<boolean>(false);
const columnTilte = ref<string>("");

const toggle = () => {
 isCreatingNewColumn.value = !isCreatingNewColumn.value;
};

const isSubmitDisabled = computed(() => {
 return columnTilte.value.trim() === "";
});
const emit = defineEmits<{
 (e: "addColumn", column: { title: string }): void;
}>();

const submit = () => {
 emit("addColumn", {
  title: columnTilte.value,
 });
 columnTilte.value = "";
};
</script>

<template>
 <div class="ma-2 mb-0 rounded d-flex flex-column column">
  <v-card v-if="!isCreatingNewColumn" class="mx-auto" width="100%" variant="plain" hover @click="toggle">
   <v-toolbar density="compact" class="bg-grey-darken-3 px-4">
    <IconPlus />
    <v-toolbar-title class="text-subtitle-1">Add list</v-toolbar-title>
   </v-toolbar>
  </v-card>
  <v-form v-if="isCreatingNewColumn" class="pa-3" @submit.prevent="submit">
   <v-text-field v-model="columnTilte" label="List title" variant="outlined" />
   <div>
    <v-btn type="submit" size="small" variant="tonal" class="bg-green-darken-3" :disabled="isSubmitDisabled">Add list</v-btn>
    <v-btn icon="$vuetify" density="compact" variant="text" class="ml-4" type="button" @click="toggle"> <IconDelete /> </v-btn>
   </div>
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
