import "dotenv/config";

import { Client } from "discord.js";
import mongoose from "mongoose";

const CLUSTER_PASS = process.env.MONGODB_CLUSTER_PASS;
const CLUSTER_USER = process.env.MONGODB_CLUSTER_USER;

export default (client: Client): void => {
  client.on('ready', async () => {
    if(!client.user || !client.application) console.error('Oops, client or application error...');    
    
    let mongodb_conect = false;
    
    try {
      await mongoose.connect(
        `mongodb+srv://${CLUSTER_USER}:${CLUSTER_PASS}@cluster0.fki2tsu.mongodb.net/github-info-discord`,
        {
          keepAlive: true, 
        }
      );
      mongodb_conect = true;
    } catch (error) {
      throw new Error(`${error}`);
    }
    
    if(mongodb_conect) console.log(`Success! ${client.user?.username} is online`);
  })
}