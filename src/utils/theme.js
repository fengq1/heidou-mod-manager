import {reactive} from 'vue';
import conf from "@/utils/conf.js";

export const systemTheme = 'system'

let theme

export function useSetVuetifyTheme(vuetifyTheme) {
  theme = vuetifyTheme;
}

const osTheme = reactive({
  dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
});
// watch os theme
// 系统主题变化时更新主题
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  osTheme.dark = e.matches;
  toggleTheme()
});

function getOsTheme() {
  return (osTheme.dark ? 'dark' : 'light')
}

export async function initTheme() {
  await conf.initAppConf()
  const appConfigs = await conf.appConf
  console.log('appConfigs', appConfigs)
  const appConfigTheme = appConfigs.theme
  console.log('appConfigTheme', appConfigTheme)
  return (appConfigTheme === systemTheme)
    ? getOsTheme()
    : appConfigTheme;
}

export async function toggleTheme() {
  const appConfigs = await conf.appConf;
  const appConfigTheme = appConfigs.theme
  theme.global.name.value = (appConfigTheme === systemTheme)
    ? getOsTheme()
    : appConfigTheme;
}

