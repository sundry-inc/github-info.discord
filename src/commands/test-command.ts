import { Message } from "discord.js"

export default {
  callback: (message: Message, ...args: string[]) => {
    console.log('Args:' + args);
    message.reply('test passed!');
  }
}