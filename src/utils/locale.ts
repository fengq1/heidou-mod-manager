import {readTextFile} from "@tauri-apps/plugin-fs";
import {resolveResource} from "@tauri-apps/api/path";
import {conf} from "@/utils/conf";
import {type Ref, ref} from "vue";

const path = `locale/#{locale}.json`

const local: Ref<{ [key: string]: any }> = ref({
  app: {},
  games: {}
})

export const loadLocale = async (): Promise<void> => {
  let _path = path.replace('#{locale}', conf.value.app.locale)
  local.value = JSON.parse(await readTextFile(await resolveResource(_path)));
}
export const al = (key: string): string => {
  return local.value.app[key]
}
export const gl = (key: string): string => {
  return local.value.games[conf.value.app.game][key]
}

