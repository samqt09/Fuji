module.exports.config = {
    name: "owohunt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Hunt animals, earn experience, find gems, and get XP boosters!",
    commandCategory: "Economy",
    cooldowns: 240 // Cooldown time in seconds (4 minutes)
};

module.exports.run = async ({ event, api }) => {
    const { threadID } = event;
    const animalEmojis = [
        "🐈‍⬛", "🦮", "🪳", "🪱", "🦣", "🦤", "🐅", "🐎", "🐱", "🦊", "🐩", "🐶", "🦍", "🐭", "🐖",
        "🐗", "🐏", "🐐", "🐪", "🦚", "🦘", "🦞", "🦝", "🍃", "🦗", "🦒", "🦖", "🦕", "🐞", "🐝",
        "🐜", "🐛", "🐌", "🦋", "🦑", "🦐", "🦀", "🐚", "🦈", "🐙", "🐠", "🐬", "🐋", "🐢", "🦎",
        "🐍", "🐲", "🐉", "🐳", "🐊", "🦆", "🕊", "🐧", "🐦", "🦉", "🐸", "🐾", "🐥", "🦃", "🐔"
    ];

    const gemEmojis = [
        "💎", "💰", "💸"
    ];

    const xpBoosterEmoji = "🚀"; // Emoji for XP booster

    const gems = [
        { emoji: "💎", min: 0, max: 50, odds: 40 },
        { emoji: "💎", min: 51, max: 200, odds: 30 },
        { emoji: "💎", min: 201, max: 1000, odds: 20 },
        { emoji: "💎", min: 1001, max: 3000, odds: 8 },
        { emoji: "💎", min: 3001, max: 5780, odds: 2 }
    ];

    const xpBoosters = [
        { emoji: "🚀", multiplier: 2, odds: 0.018 },
        { emoji: "🚀", multiplier: 3, odds: 0.15 },
        // ... Add more xp booster options as needed
    ];

    const randomAnimalEmoji = animalEmojis[Math.floor(Math.random() * animalEmojis.length)];
    const randomGemEmoji = gemEmojis[Math.floor(Math.random() * gemEmojis.length)];
    const randomGem = gems.find(gem => Math.random() * 100 < gem.odds);
    const gemAmount = Math.floor(Math.random() * (randomGem.max - randomGem.min + 1)) + randomGem.min;

    const randomXPBooster = xpBoosters.find(booster => Math.random() < booster.odds);
    const xpMultiplier = randomXPBooster ? randomXPBooster.multiplier : 1;

    const message = `
        You went hunting and caught an animal: ${randomAnimalEmoji}!
        You found: ${randomGemEmoji} ${gemAmount} gems!
        You also found an XP Booster: ${xpBoosterEmoji} (×${xpMultiplier})
        Gems Hunt Odds: ${gems.map(g => `**${g.odds}%** for ${g.emoji} ${g.min}-${g.max}`).join(", ")}
        XP Booster Odds: ${xpBoosters.map(b => `**${(b.odds * 100).toFixed(3)}%** for ${b.emoji} (×${b.multiplier})`).join(", ")}
    `;

    api.sendMessage(message, threadID);
};
