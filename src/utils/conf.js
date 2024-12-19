import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile, writeTextFile} from '@tauri-apps/plugin-fs';
import {loadLocale} from "@/utils/locale.js";

const appConfPath = 'resources/app.conf.json'
const appConfResource = await resolveResource(appConfPath);
export let appConf;
export default {
  async initAppConf() {
    appConf = JSON.parse(await readTextFile(appConfResource));
    console.log("加载配置"+appConf)
    await loadLocale()
  },
  get() {
    return appConf;
  },
  async saveAppConf() {
    let result = {}
    await writeTextFile(appConfResource, JSON.stringify(appConf))
      .then(() => {
        // this.appConf = newAppConf;
        result.error = false;
      })
      .catch(e => {
        result.error = true;
        result.msg = e
      })
    return result
  }
}
