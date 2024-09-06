import { createStore } from "vuex";

interface State {
  expenses: {
    id: number;
    description: string;
    amount: number;
  }[];
}

export default createStore<State>({
  state: { expenses: [] },
  mutations: {
    addExpense(state, expense) {
      state.expenses.push(expense);
    },
    removeExpense(state, id) {
      state.expenses = state.expenses.filter((exp) => exp.id !== id);
    },
  },
  actions: {
    addExpense({ commit }, expense) {
      commit("addExpense", expense);
    },
    removeExpense({ commit }, id) {
      commit("removeExpense", id);
    },
  },
  getters: {
    totalExpenses: (state) =>
      state.expenses.reduce((sum, expense) => sum + expense.amount, 0),
  },
});
