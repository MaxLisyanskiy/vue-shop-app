import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Plugins
import VueAgile from 'vue-agile'


import './assets/scss/main.scss'


createApp(App).use(VueAgile).use(store).use(router).mount('#app')
