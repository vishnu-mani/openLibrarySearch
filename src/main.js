import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// eslint-disable-next-line import/no-unresolved
import 'uno.css';

const app = createApp(App);
const pinia = createPinia()

app.use(pinia);
app.use(router);

app.mount('#app');
