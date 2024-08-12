// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Import Vuetify and its styles
import { createVuetify } from "vuetify";
import "vuetify/styles";

// Optionally import components and directives
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Create the Vuetify instance
const vuetify = createVuetify({
 components,
 directives,
});

// Create the Vue app
const app = createApp(App);

// Use Vuetify in the app
app.use(vuetify);

// Mount the app
app.mount("#app");
