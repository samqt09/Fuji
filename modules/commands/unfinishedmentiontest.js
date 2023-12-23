module.exports.config = {
    name: "mentionuser",
    version: "1.0.0",
    hasPermssion: 0,
    description: "Mention a user",
    commandCategory: "Utility",
    cooldowns: 5 // Cooldown time in seconds (5 seconds)
};

module.exports.run = async ({ event, api }) => {
    const { threadID, mentions } = event;

    // Get the mention of the user
    const mention = Object.keys(mentions)[0];
    const mentionedUser = mentions[mention];

    // Construct the mention message
    const message = `You mentioned ${mentionedUser.replace("@", "")}!`;

    // Send the mention message
    api.sendMessage(message, threadID);
};
