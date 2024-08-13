<script setup lang="ts">
import IconeElipsis from "@/components/icons/IconeElipsis.vue"
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <v-card  
    class="mx-auto"
    :title="title"
    append-icon=IconeElipsis
    >
    
    <v-card-text>
     {{ desc }}
    </v-card-text class="pa-0">
  </v-card>
</template>
