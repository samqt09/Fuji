const fetch = require("node-fetch");

module.exports.config = {
    name: "autooff",
    version: "1.0.0",
    hasPermission: 0,
    credits: "YourName",
    description: "Turn off the bot for a specified duration.",
    commandCategory: "admin",
    cooldowns: 1
};

module.exports.run = async ({ event, api, args }) => {
    const durationMinutes = parseInt(args[0]); // Duration in minutes
    const webhookURL = "radiance-1.jidite1109.repl.co"; // Replace with your Replit webhook URL

    if (isNaN(durationMinutes) || durationMinutes <= 1) {
        api.sendMessage("Please provide a valid duration in minutes.", event.threadID);
        return;
    }

    // Notify the thread list about the bot going offline
    api.sendMessage(`🤖 The bot will be going offline for ${durationMinutes} minutes. It will be back soon!`, event.threadID);

    // Send a request to your Replit webhook to turn off the bot
    await fetch(webhookURL, { method: "POST", body: JSON.stringify({ action: "off" }) });

    // Wait for the specified duration (simulating the bot being offline)
    await new Promise(resolve => setTimeout(resolve, durationMinutes * 60 * 1000));

    // Send a request to your Replit webhook to turn on the bot
    await fetch(webhookURL, { method: "POST", body: JSON.stringify({ action: "on" }) });

    // Notify the thread list that the bot is back online
    api.sendMessage("🤖 The bot is back online!", event.threadID);
};
