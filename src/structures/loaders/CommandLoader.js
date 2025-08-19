const fs = require("node:fs");
const path = require("node:path");

class CommandLoader {

    static LoadCommands(client , commandsFoldersPath) {
        const commandFolders = fs.readdirSync(commandsFoldersPath);

        for (const commandFolder of commandFolders) {
            
            const commandsPath = path.join(commandsFoldersPath , commandFolder);
            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));
            for (const commandFile of commandFiles) {
                const commandFilePath = path.join(commandsPath , commandFile);
                const command = require(commandFilePath);

                if ("data" in command && "execute" in command) client.commands.set(command.data.name , command);
                else client.logger.warn(`The command at ${commandFilePath} is missing or required "data" or "execute" property.`)
            }

        }
    }

}

module.exports = { CommandLoader }