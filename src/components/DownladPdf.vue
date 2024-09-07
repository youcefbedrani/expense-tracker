<template>
  <div>
    <button
      @click="downloadPDF"
      class="w-full h-[40px] text-white bg-gray-950 mt-2"
    >
      Download Expense Report
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});

const downloadPDF = () => {
  const doc = new jsPDF();
  let yPos = 50;

  doc.setFontSize(18);
  doc.text("Expense Tracker Report", 70, 10);

  doc.setFontSize(12);
  doc.text(`Total: ${props.total} DZD`, 10, 20);
  doc.text(`Income: ${props.income} DZD`, 10, 30);
  doc.text(`Expense: ${props.expense} DZD`, 10, 40);

  doc.setFontSize(14);
  doc.text("Transactions:", 10, yPos);

  doc.setFontSize(12);
  autoTable(doc, {
    startY: 55,
    head: [["#", "Description", "Amount", "Date"]],
    body: props.transactions.map((transaction, index) => [
      index + 1,
      transaction.text,
      `${transaction.amount} DZD`,
      transaction.date,
    ]),
    theme: "grid",
    headStyles: { fillColor: [22, 160, 133] },
    margin: { top: 10 },
  });

  // Add footer
  const lastY = doc.lastAutoTable.finalY; // Get the Y position after the table
  doc.text("Made by Bedrani Mohammed Adel", 70, lastY + 10);

  doc.save("expense-tracker-report.pdf");
};
</script>

<style lang="scss" scoped></style>
