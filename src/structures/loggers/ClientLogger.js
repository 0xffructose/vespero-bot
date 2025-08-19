const pino = require("pino");
const { white , black , bgGreen , bgBlue , bgRed , bgYellow } = require("kleur");

const LogLevels = {
    INFO: white(bgBlue(" INFO ")),
    SUCCESS: white(bgGreen(" SUCCESS ")),
    WARNING: black(bgYellow(" WARNING ")),
    ERROR: white(bgRed(" ERROR "))
}

class ClientLogger {
    constructor() {
        this.logger = pino({
            transport: {
                target: "pino-pretty",
                options: {
                    colorize: true,
                    ignore: "pid,hostname,level"
                }
            }
        });
    }

    Log(level , message) {
        if (!Object.values(LogLevels).includes(level)) return;
        this.logger.info(level + " " + message)
    }   
}

module.exports = { ClientLogger , LogLevels }