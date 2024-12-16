/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from '@/plugins'

// Components
import App from './App.vue'
import appConfigs from "./utils/appConfigs.js";
// Composables
import {createApp} from 'vue'


const app = createApp(App)

registerPlugins(app)
app.config.globalProperties.$appConfigs = appConfigs;

app.mount('#app')
