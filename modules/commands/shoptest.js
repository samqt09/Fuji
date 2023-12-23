module.exports.config = {
    name: "shop1",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Draffodils",
    description: "View and collect items in the shop.",
    commandCategory: "economy",
    cooldowns: 2,
};
const axios = require("axios");
const { Currencies } = global.nodemodule;

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

const userInventories = {};

function getUserInventory(userID) {
    return userInventories[userID] || [];
}

function updateUserInventory(userID, collectedItem) {
    if (!userInventories[userID]) {
        userInventories[userID] = [];
    }
    userInventories[userID].push(collectedItem);
}

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID, senderID } = event;

    try {
        if (args[0] === "collect" && args[1]) {
            const itemName = args.slice(1).join(" ");
            const itemToCollect = items.find(item => item.name.toLowerCase() === itemName.toLowerCase());

            if (!itemToCollect) {
                api.sendMessage("Item not found in the shop.", threadID, messageID);
                return;
            }

            if (itemToCollect.stock <= 0) {
                api.sendMessage("This item is out of stock.", threadID, messageID);
                return;
            }

            const challengePassed = Math.random() < 0.01;
            if (!challengePassed) {
                api.sendMessage("You faced a challenge and couldn't collect the item this time.", threadID);
                return;
            }

            const userInventory = getUserInventory(senderID);
            if (userInventory.includes(itemToCollect.name)) {
                api.sendMessage(`You already have ${itemToCollect.name} ${itemToCollect.emoji} in your collection.`, threadID);
                return;
            }
            updateUserInventory(senderID, itemToCollect.name);
            api.sendMessage(`You have successfully collected ${itemToCollect.name} ${itemToCollect.emoji}.\nItem Image: ${itemToCollect.imgurLink}`, threadID);
            itemToCollect.stock--;
            return;
        } else if (args[0] === "inventory") {
            const userInventory = getUserInventory(senderID);
            if (userInventory.length === 0) {
                api.sendMessage("Your collection is empty.", threadID, messageID);
                return;
            }

            const inventoryMessage = `Your Collection:\n\n${userInventory.map(item => {
                const itemCount = userInventory.filter(invItem => invItem === item).length;
                return `- ${item} (${itemCount}) ${getEmojiByName(item)}\n`;
            }).join("")}`;
            api.sendMessage(inventoryMessage, threadID, messageID);
        } else if (args[0] === "page" && args[1]) {
            const page = parseInt(args[1]);
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            if (page < 1 || startIndex >= items.length) {
                api.sendMessage("Invalid page number.", threadID, messageID);
                return;
            }

            let shopMessage = `Items in the shop (Page ${page}):\n\n`;
            const displayedItems = items.slice(startIndex, endIndex);
            displayedItems.forEach(item => {
                shopMessage += `${item.emoji} ${item.name}\nType: ${item.type}\nRarity: ${item.rarity}\nStock: ${item.stock}\nItem Image: ${item.imgurLink}\n\n`;
            });

            shopMessage += `To collect an item, use: ,shop collect <item_name>\nTo check your collection, use: ,shop inventory`;
            api.sendMessage(shopMessage, threadID, messageID);
        } else {
            api.sendMessage("Invalid command format. Use ,shop collect <item>, ,shop inventory, or ,shop page <page_number>.", threadID, messageID);
        }
    } catch (error) {
        api.sendMessage("An error occurred while processing your request.", threadID, messageID);
    }
};

function getEmojiByName(itemName) {
    const item = items.find(item => item.name === itemName);
    return item ? item.emoji : "";
      }
           