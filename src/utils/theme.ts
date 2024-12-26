import {reactive} from 'vue';
import {conf} from "@/utils/conf";
import type {ThemeInstance} from "vuetify";

export const systemTheme: string = 'system'

export let theme: ThemeInstance

export const setTheme = (_theme: ThemeInstance) => {
  theme = _theme
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

const getOsTheme = (): string => {
  return (osTheme.dark ? 'dark' : 'light')
}

export const getTheme = (): string => {
  const appConfTheme = conf.value.app.theme
  console.log('appConfTheme', appConfTheme)
  return (appConfTheme === systemTheme)
    ? getOsTheme()
    : appConfTheme;
}

export const toggleTheme = (): void => {
  const appConfTheme = conf.value.app.theme
  theme.global.name.value = (appConfTheme === systemTheme)
    ? getOsTheme()
    : appConfTheme;
}

