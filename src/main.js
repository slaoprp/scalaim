import { createApp } from 'vue';
import App from './App.vue';
import PrimeVuePlugin from './plugins/primevue';

const app = createApp(App);
app.use(PrimeVuePlugin);
app.mount('#app');
