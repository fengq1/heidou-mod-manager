import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile} from '@tauri-apps/plugin-fs';


let conf;
const appConfPath = 'resources/app.conf.json'
export default {
  async getAppConf() {
    //read conf
    //读取appConfig
    if (undefined === conf) {
      const appConfResource = await resolveResource(appConfPath);
      conf = JSON.parse(await readTextFile(appConfResource));
    }
    //read i18n config
    //读取国际化文件
    return conf;
  },

}
