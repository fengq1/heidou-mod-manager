import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile} from '@tauri-apps/plugin-fs';

const confPath = await resolveResource('resources/app.conf.json');

export default {
  json: async function () {
    return JSON.parse(await readTextFile(confPath));
  }
}
