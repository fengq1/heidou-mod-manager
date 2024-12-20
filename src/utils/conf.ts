import {resolveResource} from '@tauri-apps/api/path';
import {readTextFile, writeTextFile} from '@tauri-apps/plugin-fs';
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
})

export const initAppConf = async (): Promise<void> => {
  conf.value.app = JSON.parse(await readTextFile(resource.app));
  console.log("加载配置", conf.value.app)
  let game = conf.value.app.game;
  let _gameConfPath = path.game.replace("#{game}", game)
  console.log("加载游戏配置", _gameConfPath)
  conf.value[game] = JSON.parse(await readTextFile(await resolveResource(_gameConfPath)));
  await loadLocale()
}

interface Result {
  error: boolean,
  msg: string
}

export const saveAppConf = async (): Promise<Result> => {
  console.log("保存配置", conf.value.app)
  let result: Result = {error: false, msg: ''}
  await writeTextFile(resource.app, JSON.stringify(conf.value.app))
    .then(() => {
      // conf.app = newAppConf;
    })
    .catch(e => {
      result.error = true;
      result.msg = e
    })
  return result
}

export const getGameConf = (): Promise<{}> => {
  let game = conf.value.app.game;
  return conf.value[game];
}
