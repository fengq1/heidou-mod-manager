import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile, writeTextFile} from '@tauri-apps/plugin-fs';
import {loadLocale} from "@/utils/locale.js";
import {ref} from "vue";

const appConfPath = 'resources/app.conf.json'
const appConfResource = await resolveResource(appConfPath);

export default {
  setup() {
    const appConf = ref({})
    return {
      appConf
    }
  },
  async initAppConf() {
    this.appConf = JSON.parse(await readTextFile(appConfResource));
    console.log("加载配置" + this.appConf)
    await loadLocale()
  },
  async saveAppConf() {
    let result = {}
    await writeTextFile(appConfResource, JSON.stringify(this.appConf))
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
