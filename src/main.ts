import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PluginManager from './plugins/pluginManager'


const app = createApp(App)

PluginManager(app)


app.mount('#app')
