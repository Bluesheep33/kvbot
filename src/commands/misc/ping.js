const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const sent = await interaction.reply({content: 'Pong!', fetchReply: true});
        const latency = sent.createdTimestamp - interaction.createdTimestamp;
        await interaction.editReply({content: `Pong! Latency: ${latency}ms`});
    },
};
