import {readTextFile} from "@tauri-apps/plugin-fs";
import {resolveResource} from "@tauri-apps/api/path";
import conf from "@/utils/conf.js";

const localeConfPath = `resources/locales/#{locale}.json`

let localeJson

export const loadLocale = async () => {
  console.log("载入本地化", conf.appConf.locale)
  let path = localeConfPath.replace('#{locale}', conf.appConf.locale)
  localeJson = JSON.parse(await readTextFile(await resolveResource(path)));
  console.log("载入本地化", localeJson)
}
export const t = (key) => {
  console.log("本地化" + localeJson)
  return localeJson[key]
}

