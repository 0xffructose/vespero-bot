const { Events } = require("discord.js");
const { LogLevels } = require("../loggers/ClientLogger");
 
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.logger.Log(LogLevels.INFO , `Vespero just logged as ${client.user.tag}!`);
    }
}