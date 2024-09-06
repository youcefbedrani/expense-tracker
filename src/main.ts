import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store";

const app = createApp(App);

app.use(Toast);
app.use(store);
app.mount("#app");
