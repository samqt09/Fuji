module.exports.config = {
    name: "bakestats",
    version: "1.0.0",
    credits: "Draffodils",
    description: "View your bakery and stats.",
    commandCategory: "Economy",
    cooldowns: 5 // Cooldown time in seconds
};

module.exports.run = async ({ event, api }) => {
    // Set initial values
    const level = 1;
    const balance = 0;
    const money = 0;
    const progress = "0%";

    // Create the bakery view
    const bakeryView = ` ☹️  ・<Lv: ${level}> (${progress})
Balance: ⏣ ${balance.toLocaleString()}
Money: ⏣ ${money.toLocaleString()}`;

    api.sendMessage(bakeryView, event.threadID);
};
