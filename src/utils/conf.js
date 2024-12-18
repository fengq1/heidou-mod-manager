import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile, writeTextFile} from '@tauri-apps/plugin-fs';


let appConf;
const appConfPath = 'resources/app.conf.json'
const appConfResource = await resolveResource(appConfPath);

export default {
  async getAppConf() {
    //read conf
    //读取appConfig
    if (undefined === appConf) {
      appConf = JSON.parse(await readTextFile(appConfResource));
    }
    //read i18n config
    //读取国际化文件
    return appConf;
  },
  saveAppConf(newAppConf) {
    let msg = {}
    writeTextFile(appConfResource, JSON.stringify(newAppConf))
      .then(() => {
        this.appConf = newAppConf;
        msg.success = true;
        return msg;
      })
      .catch(e => {
        msg.success = false;
        msg.error = e
        return msg;
      })
  }
}
