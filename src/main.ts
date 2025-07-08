import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

console.log("change commited from branch: 'feat/test-git-merge'");
console.log("dummy change"); // This is a dummy change to trigger a commit
createApp(App).mount("#app");
