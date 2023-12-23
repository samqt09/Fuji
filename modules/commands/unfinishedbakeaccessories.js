module.exports.config = {
    name: "bakeaccessories",
    version: "1.0.0",
    credits: "Draffodils",
    description: "View the accessories and things needed to make food and drinks.",
    commandCategory: "Economy",
    cooldowns: 5 // Cooldown time in seconds
};

module.exports.run = async ({ event, api }) => {
    const accessories = [
        { emoji: "🧂", name: "Salt Shaker", unlockLevel: 5 },
        { emoji: "🍴", name: "Utensils Set", unlockLevel: 5 },
        { emoji: "🔪", name: "Chef's Knife", unlockLevel: 7 },
        { emoji: "🧁", name: "Cupcake Liners", unlockLevel: 7 },
        { emoji: "🥄", name: "Mixing Spoon", unlockLevel: 9 },
        { emoji: "🧊", name: "Ice Cube Tray", unlockLevel: 9 },
        { emoji: "🍽️", name: "Dining Set", unlockLevel: 11 },
        { emoji: "🥛", name: "Milk Frother", unlockLevel: 11 },
        { emoji: "🥕", name: "Vegetable Peeler", unlockLevel: 13 },
        { emoji: "🥐", name: "Pastry Brush", unlockLevel: 13 },
        { emoji: "🍯", name: "Honey Dipper", unlockLevel: 15 },
        { emoji: "🍚", name: "Rice Cooker", unlockLevel: 15 },
        { emoji: "🥤", name: "Straw", unlockLevel: 17 },
        { emoji: "🥄", name: "Soup Ladle", unlockLevel: 17 },
        { emoji: "🧺", name: "Basket", unlockLevel: 19 },
        // ... (add more accessories and things)
    ];

    const generateMessage = (accessory) => {
        return `${accessory.emoji} ${accessory.name}\nUnlock Level: Level ${accessory.unlockLevel}`;
    };

    let message = `Bakeaccessories - Available Accessories and Things\n`;

    for (const accessory of accessories) {
        message += `\n${generateMessage(accessory)}\n`;
    }

    api.sendMessage(message, event.threadID);
};
