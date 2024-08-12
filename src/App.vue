<script setup lang="ts">
import { boardData } from "@/data/boardData";
import Column from "./components/Column.vue";
import Card from "./components/Card.vue";

console.log(boardData);
</script>

<template>
  <v-app>
    <div class="d-flex overflow-x-auto">
      <div class="d-flex flex-nowrap">
        <Column v-for="column in boardData" :key="column.id" :title="column.title">
          <Card
            v-for="task in column.tasks"
            :key="task.id"
            :title="task.title"
            :desc="task.desc"
          />
        </Column>
      </div>
    </div>
  </v-app>
</template>
