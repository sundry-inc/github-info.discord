import  fs, { Dirent } from 'fs';
import { Client } from 'discord.js';

import text_commands from './types/listeners';

import listenerTextCommands from './listeners/text-commands';

function getFiles(path: string, suffix: string): string[] {
  const files: Dirent[] = fs.readdirSync(path, {
    withFileTypes: true
  });
  let commandFiles: string[] = [];

  for (const file of files) {
    if(file.isDirectory()){
      commandFiles = [
        ...commandFiles,
        ...getFiles(`${path}/${file.name}`, suffix)
      ]
    } else if(file.name.endsWith(suffix))
      commandFiles.push(`${path}/${file.name}`)
  }

  return commandFiles;
}

export default (client: Client) => {
  const commands: text_commands = {};
  const suffix = '.ts';
  const commandFiles = getFiles(__dirname + '/commands', suffix);

  for (const command of commandFiles) {
    let commandFile = require(command);
    if(commandFile.default) commandFile = commandFile.default;

    const splitPath = command.replace(/\\/g, "/").split('/');
    const commandName = splitPath[splitPath.length - 1].replace(suffix, '');

    commands[commandName.toLowerCase()] = commandFile;
  }

  // console.group('Commands:');
  //   console.log(commands);
  // console.groupEnd();

  listenerTextCommands(client, commands);
}