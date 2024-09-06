<template>
  <div>
    <h2 class="text-gray-700">YOUR BALNCE</h2>
    <p class="text-3xl font-bold">${{ total }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
