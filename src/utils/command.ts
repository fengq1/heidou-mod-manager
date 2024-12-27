import {type ChildProcess, Command, type SpawnOptions} from '@tauri-apps/plugin-shell';
import {platform} from '@tauri-apps/plugin-os';

const currentPlatform = platform();

const commands: any = {
  'get_current_smapi_version': ['datafile', 'where', 'name="#gemaPath\\\\StardewModdingAPI.exe"', 'get', 'Version', '/value']
}

interface CmdArgOptions {
  index: number;
  param: string;
  value: string;
}

export const exec = async (cmdName: string, options: CmdArgOptions[]): Promise<any> => {
  let args: string[] = [...commands[cmdName]]
  let copyArgs: string[] = [...args];
  cmdName = currentPlatform + "_" + cmdName;
  if (options.length > 0) {
    options.forEach((option: CmdArgOptions) => {
      args[option.index] = copyArgs[option.index].replace(option.param, option.value);
    })
  }
  console.log("exec", cmdName, args)
  return await Command.create(cmdName, args, {"encoding": "gbk"})
    .execute()
}
