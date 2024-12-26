import {conf, saveGameConf} from "@/utils/conf";
import {invoke} from "@tauri-apps/api/core";
import {exec, getCmd} from "@/utils/command";

export const getSvConf = async () => {
  console.log("获取SvConf")
  const gamePath = conf.value.game['path'];
  if (!gamePath) {
    await invoke('get_steam_path')
      .then(async steamPath => {
        conf.value.game['path'] = steamPath + '/steamapps/common/Stardew Valley';
        await saveGameConf()
      });
  }
  await getSmapiVersion()
  return conf.value.game
}

const getSmapiVersion = async () => {
  const smapiVersion = conf.value.game.smapi.version;
  console.log('smapiVersion', conf.value.game)
  if (!smapiVersion) {
    const command: string = getCmd('getCurrentSmapiVersion')
      .replace("#gemaPath", conf.value.game['path'].replace(/\//g, "\\"))
    console.log('command', command)
    await exec(command)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
  }
}
// const loadCurrentSmapiVersion = () => {
//   console.log(loadCurrentSmapiVersion)
//   const svPath = svConf.value.path;
//   invoke('get_current_smapi_version', {"sv_path": svPath})
//     .then(res => {
//       console.log(res)
//     })
//     .catch(err => {
//       message.error("保存失败", {variant: "tonal"});
//     })
// }
