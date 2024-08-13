<script setup lang="ts">
import IconDelete from "@/components/icons/IconDelete.vue"
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <v-card  
    class="card mx-auto position-relative"
    > 
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
     {{ desc }}
<v-card-actions class="position-absolute top-0 right-0 hide card-actions">
<v-btn icon="mdi-delete" @click="$emit('removeTask')" class="text-red-darken-3">
<IconDelete/>
</v-btn>
</v-card-actions>
    </v-card-text class="pa-0">
  </v-card> 
</template>

<style scoped>

.v-card-actions {
  transition: all 0.1s;
}

.hide {
  visibility: hidden;
}

.card:hover .card-actions{
visibility: visible;
}

</style>
