<template>
  <div
    class="flex items-center justify-center mx-auto py-4 my-4 w-full h-[80px] bg-gray-100 shadow-md"
  >
    <div class="text-center mr-8">
      <h2>INCOME</h2>
      <h2 class="text-green-300">DZD+{{ income }}</h2>
    </div>
    <div class="h-[40px] w-[2px] mr-8 bg-gray-300"></div>
    <div class="text-center">
      <h2>EXPENSE</h2>
      <h2 class="text-red-500">DZD{{ expense }}</h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
