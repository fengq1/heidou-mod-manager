import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile, writeTextFile, readDir} from '@tauri-apps/plugin-fs';
import {loadLocale} from "@/utils/locale";

import {type Ref, ref} from "vue";

const path = {
  app: 'conf/app.conf.json',
  game: 'conf/#{game}.json'
}
const resource = {
  app: await resolveResource(path.app)
}

export const conf: Ref<{ [key: string]: any }> = ref({
  app: {
    game: ''
  },
  game: {}
})

export const loadAppConf = async (): Promise<void> => {
  conf.value.app = JSON.parse(await readTextFile(resource.app));
  let game = conf.value.app.game;
  let gameConfPath = path.game.replace("#{game}", game)
  console.log("加载游戏配置", game, gameConfPath)
  conf.value.game = JSON.parse(await readTextFile(await resolveResource(gameConfPath)));
  await loadLocale()
}

export const saveAppConf = (): Promise<void> => {
  console.log("保存配置", conf.value.app)
  return writeTextFile(resource.app, JSON.stringify(conf.value.app))
}
export const saveGameConf = async (): Promise<void> => {
  console.log('保存游戏配置')
  let game = conf.value.app.game;
  let gameConfPath = path.game.replace("#{game}", game)
  console.log(conf.value.game['path'])
  return writeTextFile(await resolveResource(gameConfPath), JSON.stringify(conf.value.game));
}
// export const getGameConf = (): { [key: string]: any } => {
//   let game = conf.value.app.game;
//   return conf.value[game];
// }
