const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Use to view your or someones avatar")
    .addUserOption(option => option.setName("member").setDescription("Member to avatar be viewed")),
    async execute(interaction) {

        const member = await interaction.options.getMember("member");
        
        if (!member) {
            await interaction.reply({ content: "Non-member" });
        } else {
            await interaction.reply({ content: "Member" });
        }

    }
}