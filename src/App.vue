<script setup lang="ts">
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import History from "./components/History.vue";
import NewTrans from "./components/NewTrans.vue";
import DownloadPdf from "./components/DownladPdf.vue";
import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transaction"));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const toast = useToast();

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const handleSubmitted = (transactionsData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionsData.text,
    amount: transactionsData.amount,
    date: new Date().toLocaleString(),
  });
  savedTolocalStorage();
  toast.success("Transaction Added successfully");
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000);
};

const handleDelete = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );

  toast.success("Transaction Deleted successfully");
};

const savedTolocalStorage = () => {
  localStorage.setItem("transaction", JSON.stringify(transactions.value));
};
</script>

<template>
  <div class="container flex items-center justify-center mx-auto my-12">
    <div>
      <h1 class="text-2xl mb-4">Expense Tracker</h1>
      <Header :total="total" />
      <Balance :income="+income" :expense="+expense" />
      <History :transactions="transactions" @Deleted="handleDelete" />
      <NewTrans @Submitted="handleSubmitted" />
      <DownloadPdf
        :transactions="transactions"
        :total="total"
        :income="+income"
        :expense="+expense"
      />
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: "SUSE", sans-serif;
}
</style>
