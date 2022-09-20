import { Client } from 'discord.js';

import listenerTextCommands from './listeners/text-commands';
import parseDir from './lib/parse-dir'

import text_commands_type from './types/listeners';

export default (client: Client) => {
  const commands: text_commands_type = {};
  const suffix = '.ts';
  const commandFiles = parseDir(__dirname + '/commands', suffix);

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