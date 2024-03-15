const { SlashCommandBuilder } = require('discord.js');

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randomResponse() {
    return randomChoice([
        "always", "ask again later", "better not tell you now", "cannot predict now",
        "don't count on it", "it is certain", "it is decidedly so",
        "most likely", "my reply is no", "my sources say no", "outlook not so good", "outlook good",
        "signs point to yes", "very doubtful", "without a doubt",
        "yes", "yes - definitely", "you may rely on it",
        "nah man", "nope", "no", "no way", "no chance", "no way dude", "no way jose", "no way josephina"
    ]);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8-ball')
        .setDescription("Ask and I will answer!")
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The question you want to ask the magic 8-ball')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(`You asked: ${interaction.options.getString('question')}\n` +
            `The magic 8-ball says: ${randomResponse()}`);
    },
};
