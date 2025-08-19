const { REST , Routes } = require("discord.js");
const { ClientLogger , LogLevels } = require("./src/structures/loggers/ClientLogger");

const fs = require("node:fs"); const path = require("node:path");

require("dotenv").config();

const commands = [];
const logger = new ClientLogger();

const commandFoldersPath = path.join(__dirname , "src/structures/commands");
const commandFolders = fs.readdirSync(commandFoldersPath);

for (const commandFolder of commandFolders) {
    const commandsPath = path.join(commandFoldersPath , commandFolder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

    for (const commandFile of commandFiles) {
        const commandFilePath = path.join(commandsPath , commandFile);
        const command = require(commandFilePath);

        if ("data" in command && "execute" in command) commands.push(command.data.toJSON());
        else logger.Log(LogLevels.WARNING , `The command at ${filePath} is missing a required "data" or "execute" property`);
    }
}

const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);

(async () => {
    try {
        logger.Log(LogLevels.INFO , `Started refreshing ${commands.length} application (/) commands`);
    
        const data = await rest.put(
            Routes.applicationCommands(process.env.DISCORD_BOT_ID),
            { body: commands }
        );

        logger.Log(LogLevels.SUCCESS , `Successfully reloaded ${data.length} application (/) commands`);
    } catch (error) {
        logger.Log(LogLevels.ERROR , error)
    }
})()