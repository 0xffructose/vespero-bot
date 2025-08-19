const { Client , GatewayIntentBits, Collection } = require("discord.js");
const dotenv = require("dotenv"); const path = require("path");

const { ClientLogger , LogLevels } = require("./structures/loggers/ClientLogger");

const { EventLoader } = require("./structures/loaders/EventLoader");
const { CommandLoader } = require("./structures/loaders/CommandLoader");


class VesperoClient extends Client {
    constructor () {
        super({
            intents: [
                GatewayIntentBits.Guilds,        
                GatewayIntentBits.GuildMembers,             
                GatewayIntentBits.GuildMessages,     
                GatewayIntentBits.GuildVoiceStates,        
                GatewayIntentBits.MessageContent     
            ]
        });

        dotenv.config();
        this.logger = new ClientLogger();
        
        this.commands = new Collection();
        this.callbacks = new Map();
    }

    Spawn() {
        
        EventLoader.LoadEvents(this ,  path.join(__dirname , "structures/events"));
        CommandLoader.LoadCommands(this , path.join(__dirname , "structures/commands"));
        
        this.login(process.env.DISCORD_BOT_TOKEN);
    }
}

module.exports = { VesperoClient };