/**
 * snackbar.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from '@/plugins'
// Components
import App from './App.vue'

import {al, gl} from '@/utils/locale'
// Composables
import {createApp} from 'vue'

const app = createApp(App)

registerPlugins(app)

app.config.globalProperties.$al = al;
app.config.globalProperties.$gl = gl;

app.mount('#app')
