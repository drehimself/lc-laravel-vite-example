<template>
  <div>
    <div>Hello, {{ name }}</div>
    <div>This is a Vue SFC. Count: {{ count }}</div>
    <div><button @click="count++">Increment</button></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['name']);

const count = ref(0);
</script>
