<template>
  <div>
    <h2 class="text-gray-700 mt-4 mb-2">Add new transaction</h2>
    <hr />

    <form @submit.prevent="onSubmit">
      <h3 class="mt-2">Text</h3>
      <input
        type="text"
        placeholder="Enter Text"
        v-model="text"
        class="w-full h-[40px] border my-1 p-3"
      />
      <h2 class="mt-2">Amount</h2>
      <p>(Negative = Expense , Positive = Income)</p>
      <input
        type="number"
        placeholder="Enter Amount"
        v-model="amount"
        class="w-full h-[40px] border my-1 p-3"
      />
      <button type="submit" class="w-full h-[40px] text-white bg-blue-950 mt-2">
        Add transaction
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useToast } from "vue-toastification";
const text = ref("");
const amount = ref("");
const emit = defineEmits("Submitted");

const toast = useToast();

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error("Both fields are required");
  }
  const transactionsData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };
  emit("Submitted", transactionsData);
  text = "";
  amount = "";
};
</script>

<style lang="scss" scoped></style>
