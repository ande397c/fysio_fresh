<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import draggable from "vuedraggable";
import Column from "./components/Column.vue";
import Card from "./components/Card.vue";
import AddColumn from "./components/AddColumn.vue";
import { boardData } from "@/data/boardData";
import type { TaskColumn, Task } from "./types";

const data = ref<TaskColumn[]>([]);
const containerRef = ref<HTMLElement | null>(null);

onMounted(() => {
 data.value = boardData;
});

const removeTask = (card: Task) => {
 const column = data.value.find((col) => col.tasks.some((task) => task.id === card.id));
 if (column) {
  const taskIndex = column.tasks.findIndex((task) => task.id === card.id);
  if (taskIndex !== -1) {
   column.tasks.splice(taskIndex, 1);
  }
 }
};

const addTask = (columnId: number, card: { title: string; desc: string }) => {
 const column = data.value.find((col) => col.id === columnId);
 if (column) {
  const newCard: Task = {
   id: Date.now(),
   title: card.title,
   desc: card.desc,
  };
  column.tasks.push(newCard);
 }
};

const removeList = (column: TaskColumn) => {
 const columnIndex = data.value.findIndex((col) => col.id === column.id);
 if (columnIndex !== -1) {
  data.value.splice(columnIndex, 1);
 }
};

const addColumn = async (column: { title: string }) => {
 const newColumn: TaskColumn = {
  id: Date.now(),
  title: column.title,
  tasks: [],
 };
 data.value.push(newColumn);

 await nextTick();
 if (containerRef.value) {
  containerRef.value.scrollTo({
   left: containerRef.value.scrollWidth,
   behavior: "smooth",
  });
 }
};
</script>

<template>
 <v-app class="bg-grey-darken-4">
  <div class="pa-3">
   <h1 class="text-h6">Fysiofresh project management</h1>
  </div>
  <div class="d-flex overflow-x-auto" ref="containerRef">
   <div class="d-flex flex-nowrap">
    <Column v-for="column in data" :key="column.id" :title="column.title" @add-task="addTask(column.id, $event)" @remove-list="removeList(column)">
     <draggable v-model="column.tasks" :animation="200" ghost-class="ghost-card" group="tasks" :item-key="'id'" direction="vertical">
      <template #item="{ element }">
       <Card :key="element.id" :title="element.title" :desc="element.desc" class="mt-3 cursor-move" @remove-task="removeTask(element)" />
      </template>
     </draggable>
    </Column>
    <AddColumn @add-column="addColumn($event)" />
   </div>
  </div>
 </v-app>
</template>

<style scoped>
.ghost-card {
 opacity: 0.2;
 background-color: rgb(97, 95, 95);
}
</style>
