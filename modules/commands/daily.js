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
    { name: "Anti-Rob Pack", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🛡️", imgurLink: "https://i.imgur.com/TVwlL9w.png" }, // Add imgur link
    { name: "Aetheryx' Flower", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🌸", imgurLink: "https://i.imgur.com/xT5zZXG.png" }, // Add imgur link
    { name: "Ammo", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🔫", imgurLink: "https://i.imgur.com/EBqAMYI.png" }, // Add imgur link
    { name: "Draff Pitcher Plant", type: "Collectable", rarity: "Godly", stock: 1, emoji: "💎", imgurLink: "https://i.imgur.com/yF1j37i.gif" }, // Add imgur link
    { name: "Tumpleweed", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🌵", imgurLink: "https://i.imgur.com/FSBD9nn.gif" }, // Add imgur link
    { name: "Kens Eyes", type: "Collectable", rarity: "Common", stock: 10, emoji: "👀", imgurLink: "https://i.imgur.com/T5OkgKD.gif" }, // Add imgur link
    { name: "Stickbug", type: "Collectable", rarity: "Uncommon", stock: 8, emoji: "🐜", imgurLink: "https://i.imgur.com/3KeFOex.gif" }, // Add imgur link
    { name: "Space Adventure Box", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🚀", imgurLink: "https://i.imgur.com/R5lcNb5.gif" }, // Add imgur link
    { name: "Rare Butterfly", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🦋", imgurLink: "https://i.imgur.com/dU59YDL.gif" }, // Add imgur link
    { name: "Very sus Draff", type: "Collectable", rarity: "Rare", stock: 5, emoji: "🕵️", imgurLink: "https://i.imgur.com/LpT6373.gif" }, // Add imgur link
    { name: "Jake Binary", type: "Collectable", rarity: "Legendary", stock: 3, emoji: "👾", imgurLink: "https://i.imgur.com/0pc1Fu8.gif" }, // Add imgur link
    { name: "Blob", type: "Collectable", rarity: "Godly", stock: 2, emoji: "🔵", imgurLink: "https://i.imgur.com/lbqaIcf.gif" }, // Add imgur link
    { name: "Stonk Coin", type: "Collectable", rarity: "Godly", stock: 2, emoji: "💹", imgurLink: "https://i.imgur.com/aCaFRcR.gif" } // Add imgur link
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
