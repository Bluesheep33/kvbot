const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server-info')
        .setDescription('Replies with server info!'),
    async execute(interaction) {
        await interaction.reply("Name: " + interaction.guild.name
            + "\nTotal members: " + interaction.guild.memberCount);
    },
};