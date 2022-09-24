import { Octokit } from "octokit";

import { Message } from "discord.js"
import "dotenv/config";

const TOKEN = process.env.GITHUB_TOKEN;

export default {
  callback: async (message: Message, ...args: string[]) => {
    const octokit = new Octokit({
      auth: TOKEN
    })

    const request = await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: "joyfulpebble",
      repo: "Select",
    })
    
    console.log(
      request
    );
  }
}