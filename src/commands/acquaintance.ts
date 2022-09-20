import { Message } from "discord.js"

import User from "../schemas/UserSchema";

export default {
  callback: async (message: Message, ...args: string[]) => {

    const newUser = new User({
      user_name: message.author.username,
      user_id: message.author.id
    });
  
    const sevedUser = await newUser.save();

    message.reply('We successfully acquaintanced!');
  }
}