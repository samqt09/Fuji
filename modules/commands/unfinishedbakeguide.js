module.exports.config = {
    name: "bakeguide",
    version: "1.0.0",
    credits: "Draffodils",
    description: "View and manage your bakery and stats.",
    commandCategory: "Economy",
    cooldowns: -80 // Cooldown time in seconds
};

module.exports.run = async ({ event, api }) => {
    const guide = `🥯 Bakery Command Guide**
    
\`/bakery\` ・ View your bakery and stats
\`/shop\` ・ Opens the shop pages
\`/prepare {item}\` ・ Starts the preparation of a food/drink
\`/buy {item}\` ・ Buys an item from the shop
\`/serve\` ・ Serves your ready food to your counters
\`/milestones\` ・ View all milestones and your progress towards them
\`/lootbox\` ・ Show, buy and open lootboxes
\`/inspect\` ・ Inspect your bakery to modify skins
\`/stash\` ・ Stash an unneeded item for later use or dispose
\`/place\` ・ Place an item from your stash back to your bakery
\`/expand\` ・ Expand your bakery to provide more space
\`/van\` ・ View your ice cream van
\`/shack\` ・ View your snack shacks
\`/settings\` ・ Manage your user settings
\`/leaderboard\` ・ List top users sorted by their XP
`;

    api.sendMessage(guide, event.threadID);
};
