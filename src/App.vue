<script setup lang="ts">
import { ref, onMounted } from "vue";
import draggable from "vuedraggable";
import Column from "./components/Column.vue";
import Card from "./components/Card.vue";
import { boardData } from "@/data/boardData";
import type { TaskColumn } from "./types/TaskColumn";

const data = ref<TaskColumn[]>([]);

onMounted(() => {
  data.value = boardData;
});
</script>

<template>
  <v-app class="grey">
    <div class="d-flex overflow-x-auto">
      <div class="d-flex flex-nowrap">
        <Column v-for="column in data" :key="column.id" :title="column.title">
          <draggable
            v-model="column.tasks"
            :animation="200"
            ghost-class="ghost-card"
            group="tasks"
          >
            <template #item="{ element }">
              <Card :key="element.id" :title="element.title" :desc="element.desc" class="mt-3 cursor-move" />
            </template>
          </draggable>
        </Column>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
