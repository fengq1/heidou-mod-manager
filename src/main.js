/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from '@/plugins'

// Components
import App from './App.vue'
import conf from "./utils/conf.js";
// Composables
import {createApp} from 'vue'


const app = createApp(App)

registerPlugins(app)
app.config.globalProperties.$conf = conf;

app.mount('#app')
