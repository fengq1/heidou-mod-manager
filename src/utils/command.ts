import {type ChildProcess, Command, type SpawnOptions} from '@tauri-apps/plugin-shell';
import {platform} from '@tauri-apps/plugin-os';

const currentPlatform = platform();

const commands: any = {
  'getCurrentSmapiVersion': {
    // 'windows': 'wmic datafile where name\=\"#gemaPath\\StardewModdingAPI\.exe\" get Version /value'
    'windows': "echo 'lala'"
  }
}

export const getCmd = (cmdName: string): string => {
  return commands[cmdName][currentPlatform]
}
export const exec = async (cmd: string): Promise<any> => {
  console.log('exec', cmd)
  if (currentPlatform === 'windows') {
    const args: string[] = ['-c']
    args.push(cmd)
    console.log(args)
    return await Command.create('exec-sh', ['-c',
      "echo Hello World!",]).execute()
  } else if (currentPlatform === 'macos') {

  } else if (currentPlatform === 'android') {

  }
}
