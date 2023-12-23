module.exports.config = {
    name: "bakedrinks",
    version: "1.0.0",
    credits: "Draffodils",
    description: "View the drink items available in the bakery shop.",
    commandCategory: "Economy",
    cooldowns: 5 // Cooldown time in seconds
};

module.exports.run = async ({ event, api }) => {
    const drinks = [
        { emoji: "☕", name: "Cappuccino", description: "Creamy coffee with frothy milk.", preparationTime: "10 minutes", unlockLevel: 5 },
        { emoji: "🍹", name: "Frappe", description: "Chilled blended drink with various flavors.", preparationTime: "8 minutes", unlockLevel: 7 },
        { emoji: "🥤", name: "Milktea", description: "Sweet and flavorful milk tea.", preparationTime: "5 minutes", unlockLevel: 9 },
        { emoji: "🍏", name: "Apple Tea", description: "Refreshing tea infused with apple flavor.", preparationTime: "5 minutes", unlockLevel: 11 },
        { emoji: "🥒", name: "Cucumber Juice", description: "Cool and hydrating cucumber juice.", preparationTime: "4 minutes", unlockLevel: 13 },
        { emoji: "🍊", name: "Orange Juice", description: "Freshly squeezed orange juice.", preparationTime: "3 minutes", unlockLevel: 15 },
        { emoji: "⚫", name: "Black Gulaman", description: "Dark and flavorful black gulaman.", preparationTime: "6 minutes", unlockLevel: 17 },
        { emoji: "🍋", name: "Lemonade", description: "Tangy and zesty lemonade.", preparationTime: "4 minutes", unlockLevel: 19 },
        { emoji: "🫖", name: "Herbal Tea", description: "Infused herbal tea with soothing flavors.", preparationTime: "5 minutes", unlockLevel: 21 },
        { emoji: "🍶", name: "Sake", description: "Traditional Japanese rice wine.", preparationTime: "10 minutes", unlockLevel: 23 },
        { emoji: "🍸", name: "Martini", description: "Elegant cocktail with a mix of spirits.", preparationTime: "8 minutes", unlockLevel: 25 },
        // ... (add more drinks items)
    ];

    const generateMessage = (drink) => {
        return `${drink.emoji} ${drink.name}\nDescription: ${drink.description}\nPreparation Time: ${drink.preparationTime}\nLevel To Unlock: Level ${drink.unlockLevel}`;
    };

    let message = `Bakedrinks - Available Drink Items\n`;

    for (const drink of drinks) {
        message += `\n${generateMessage(drink)}\n`;
    }

    api.sendMessage(message, event.threadID);
};
