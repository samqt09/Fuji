module.exports.config = {
    name: "bakefood",
    version: "1.0.0",
    credits: "Draffodils",
    description: "View the items available in the bakery shop.",
    commandCategory: "Economy",
    cooldowns: 5 // Cooldown time in seconds
};

module.exports.run = async ({ event, api, args }) => {
    const items = [
        { emoji: "🍔", name: "Burger", description: "A classic burger with juicy patty.", preparationTime: "5 minutes", unlockLevel: 3 },
        { emoji: "🧇", name: "Waffle", description: "Crispy waffle with maple syrup.", preparationTime: "10 minutes", unlockLevel: 1 },
        { emoji: "🦪", name: "Oyster", description: "Freshly shucked oyster.", preparationTime: "8 minutes", unlockLevel: 2 },
        { emoji: "🍞", name: "Bread", description: "Freshly baked bread.", preparationTime: "15 minutes", unlockLevel: 3 },
        { emoji: "🥓", name: "Bacon", description: "Crispy bacon strips.", preparationTime: "10 minutes", unlockLevel: 7 },
        { emoji: "🍟", name: "French Fries", description: "Golden and crispy french fries.", preparationTime: "15 minutes", unlockLevel: 9 },
        { emoji: "🍕", name: "Pizza", description: "Delicious pizza with your favorite toppings.", preparationTime: "25 minutes", unlockLevel: 9 },
        { emoji: "🌭", name: "Hot Dog", description: "Classic hot dog with all the fixings.", preparationTime: "10 minutes", unlockLevel: 11 },
        { emoji: "🌯", name: "Burrito", description: "Tasty burrito with a variety of fillings.", preparationTime: "15 minutes", unlockLevel: 15 },
        { emoji: "🍜", name: "Noodles", description: "Savory noodles served in a flavorful broth.", preparationTime: "12 minutes", unlockLevel: 7 },
        { emoji: "🍗", name: "Fried Chicken", description: "Crispy and seasoned fried chicken.", preparationTime: "20 minutes", unlockLevel: 13 },
        { emoji: "🍣", name: "Sushi", description: "Fresh and delicious sushi rolls.", preparationTime: "30 minutes", unlockLevel: 18 },
        { emoji: "🍪", name: "Cookie", description: "Homemade chocolate chip cookie.", preparationTime: "8 minutes", unlockLevel: 6 },
        { emoji: "🍰", name: "Cake", description: "Rich and moist chocolate cake.", preparationTime: "40 minutes", unlockLevel: 20 },
        { emoji: "🍩", name: "Donut", description: "Colorful and sweet glazed donut.", preparationTime: "6 minutes", unlockLevel: 5 },
        { emoji: "🥪", name: "Sandwich", description: "Classic sandwich with fresh ingredients.", preparationTime: "10 minutes", unlockLevel: 3 },
        { emoji: "🍝", name: "Spaghetti", description: "Hearty spaghetti with tomato sauce.", preparationTime: "18 minutes", unlockLevel: 9 },
        { emoji: "🍖", name: "Roast Meat", description: "Juicy and tender roasted meat.", preparationTime: "35 minutes", unlockLevel: 16 },
        { emoji: "🍥", name: "Fish Cake", description: "Delicate and flavorful fish cake.", preparationTime: "5 minutes", unlockLevel: 2 },
        { emoji: "🍫", name: "Chocolate Bar", description: "A classic chocolate treat.", preparationTime: "2 minutes", unlockLevel: 1 },
        { emoji: "🍇", name: "Grapes", description: "Sweet and juicy grapes.", preparationTime: "1 minute", unlockLevel: 1 },
        // ... other food items
    ];

    const generateMessage = (item) => {
        return `${item.emoji} ${item.name}\nDescription: ${item.description}\nPreparation Time: ${item.preparationTime}\nLevel To Unlock: Level ${item.unlockLevel}`;
    };

    if (args.length === 0) {
        let message = `Bakeshop - Available Items\n`;

        for (const item of items) {
            message += `\n${generateMessage(item)}\n`;
        }

        api.sendMessage(message, event.threadID);
    } else {
        const requestedItemIndex = parseInt(args[0]) - 1;

        if (isNaN(requestedItemIndex) || requestedItemIndex < 0 || requestedItemIndex >= items.length) {
            api.sendMessage("Invalid item number. Please enter a valid item number.", event.threadID);
            return;
        }

        const selectedFood = items[requestedItemIndex];
        const foodMessage = generateMessage(selectedFood);

        api.sendMessage(foodMessage, event.threadID);
    }
};
