module.exports.config = {
    name: "shop1",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Draffodils",
    description: "View items in the shop.",
    commandCategory: "economy",
    cooldowns: 2,
};
const axios = require("axios");

const items = [
    { name: "A Plus", type: "Collectable", rarity: "Epic", stock: 5, emoji: "💎", imgurLink: "https://i.imgur.com/WMmUACy.gif" },
    { name: "Adventure Compass", type: "Collectable", rarity: "Epic", stock: 5, emoji: "🧭", imgurLink: "https://i.imgur.com/0HPRKGb.gif" },
    // ... (other items)
    { name: "Anti-Rob Pack", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🛡️", imgurLink: "https://i.imgur.com/Y723Y0X.png" },
    { name: "Aetheryx' Flower", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🌸", imgurLink: "https://i.imgur.com/2sP9CSq.png" },
    { name: "Ammo", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🔫", imgurLink: "https://i.imgur.com/NLjMowD.png" },
    { name: "Draff Pitcher Plant", type: "Collectable", rarity: "Godly", stock: 1, emoji: "💎", imgurLink: "https://i.imgur.com/HsZpfDD.gif" }
];

const itemsPerPage = 1;

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;

    try {
        if (args[0] === "page" && args[1]) {
            const page = parseInt(args[1]);
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            if (page < 1 || startIndex >= items.length) {
                api.sendMessage("Invalid page number.", threadID, messageID);
                return;
            }

            let shopMessage = `Items in the shop (Page ${page}):\n\n`;
            const displayedItems = items.slice(startIndex, endIndex);
            for (const item of displayedItems) {
                const image = (await axios.get(item.imgurLink, {
                    responseType: "stream"
                })).data;

                shopMessage += `${item.emoji} ${item.name}\nType: ${item.type}\nRarity: ${item.rarity}\nStock: ${item.stock}\n`;
                api.sendMessage({ attachment: image }, threadID);
                shopMessage += "\n\n";
            }

            api.sendMessage(shopMessage, threadID, messageID);
        } else {
            api.sendMessage("Invalid command format. Use ,shop page <page_number>.", threadID, messageID);
        }
    } catch (error) {
        api.sendMessage("An error occurred while processing your request.", threadID, messageID);
    }
};
