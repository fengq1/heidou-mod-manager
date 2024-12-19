import {readTextFile} from "@tauri-apps/plugin-fs";
import {resolveResource} from "@tauri-apps/api/path";
import conf from "@/utils/conf.js";

const localeConfPath = `resources/locales/#{locale}.json`

let localeJson

export const loadLocale = async () => {
  console.log("载入本地化" + localeJson)
  let path = localeConfPath.replace('#{locale}', conf.get().locale)
  localeJson = JSON.parse(await readTextFile(await resolveResource(path)));
}
export const t = (key) => {
  console.log("本地化" + localeJson)
  return localeJson[key]
}

