const fs = require("node:fs");
const path = require("node:path");

class EventLoader {

    static LoadEvents(client, eventsFolderPath) {
        const eventFiles = fs.readdirSync(eventsFolderPath).filter(file => file.endsWith(".js"));

        for (const eventFile of eventFiles) {
            const eventFilePath = path.join(eventsFolderPath , eventFile);
            const event = require(eventFilePath);

            if (event.once) client.once(event.name , (...args) => event.execute(...args));
            else client.on(event.name , (...args) => event.execute(...args));
        }
    }

}

module.exports = { EventLoader }