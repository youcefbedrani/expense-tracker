<template>
  <div>
    <h2 class="text-gray-700 mt-4 mb-2">History</h2>
    <hr />
    <div
      v-for="transaction in transactions"
      :key="transaction.id"
      class="w-full h-[40px] flex items-center justify-between pl-3 my-2 bg-gray-50 shadow-sm relative group"
    >
      <p class="text-gray-400 delete">{{ transaction.text }}</p>
      <div class="flex justify-center items-center">
        <h3
          :class="{
            'text-red-500': transaction.amount < 0,
            'text-green-500': transaction.amount > 0,
          }"
          class="mr-2"
        >
          ${{ transaction.amount }}
        </h3>
        <div
          :class="{
            'bg-red-500': transaction.amount < 0,
            'bg-green-500': transaction.amount > 0,
          }"
          class="w-[4px] h-[40px]"
        ></div>
      </div>
      <!-- Delete Button -->
      <button
        @click="deleteTransaction(transaction.id)"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits("Dleted");

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

function deleteTransaction(id) {
  emit("Deleted", id);
}
</script>

<style scoped>
.group:hover .delete {
  filter: none;
}
</style>
