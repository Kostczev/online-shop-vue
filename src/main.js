import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router.js'
import styles from '@/assets/styles/styles.scss'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(styles);
app.mount('#app');
