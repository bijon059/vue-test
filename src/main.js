import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "./firebase/index";

createApp(App)
    .use(firebase)
    .use(router)
    .mount("#app");
