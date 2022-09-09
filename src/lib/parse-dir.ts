import fs, { Dirent } from "fs";

export default function getFiles(path: string, suffix: string): string[] {
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