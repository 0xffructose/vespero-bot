const { Events } = require("discord.js");
const { LogLevels } = require("../loggers/ClientLogger");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {

        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                interaction.client.logger.Log(LogLevels.ERROR , `No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                interaction.client.logger.error(error)
                if (interaction.replied || interaction.deferred) await interaction.followUp({ content: "There was an error while executing this command!" , flags: [MessageFlags.Ephemeral] });
                else await interaction.reply({ content: "There was an error while executing this command!" , flags: [MessageFlags.Ephemeral] })
            }   
        }

    }
}