module.exports.config = {
    name: "bakeshop",
    version: "1.0.0",
    credits: "Draffodils",
    description: "View the items available in the bakery shop.",
    commandCategory: "Economy",
    cooldowns: 5 // Cooldown time in seconds
};

module.exports.run = async ({ event, api }) => {
    const pages = [
        {
            title: "Food",
            items: [
                { emoji: "🍔", name: "Burger", preparationTime: "5 minutes", unlockLevel: 3 },
                { emoji: "🍕", name: "Pizza", preparationTime: "8 minutes", unlockLevel: 5 },
                // ... (add more food items)
                { emoji: "🥭", name: "Mango", preparationTime: "3 minutes", unlockLevel: 2 },
                { emoji: "🥮", name: "Mooncake", preparationTime: "6 minutes", unlockLevel: 4 },
                { emoji: "🍱", name: "Bento Box", preparationTime: "7 minutes", unlockLevel: 4 },
                { emoji: "🍜", name: "Ramen", preparationTime: "10 minutes", unlockLevel: 6 },
                { emoji: "🍘", name: "Rice Cracker", preparationTime: "4 minutes", unlockLevel: 3 }
            ]
        },
        {
            title: "Drinks",
            items: [
                "Frappe",
                "Coffee",
                "Milktea",
                "Expired Lemon Juice",
                "Black Gulaman"
            ]
        },
        {
            title: "Bakery Accessories",
            items: [
                "Cashier Accessories",
                "Oven",
                "Ice Maker",
                "Tables and Chairs",
                "A/C",
                "Broken Fan",
                // ... (add more bakery accessories)
            ]
        },
        {
            title: "Lootboxes",
            items: [
                { name: "Bronze Lootbox", range: "$0.17 - $100" },
                { name: "Giant Lootbox", range: "$150 - $840" },
                { name: "Silver Lootbox", range: "$900 - $1700" },
                { name: "Legendary Lootbox", range: "$10,000 - $45,000" }
            ],
            luckyChances: [
                { name: "Bronze Lootbox", chance: "87%" },
                { name: "Giant Lootbox", chance: "52%" },
                { name: "Silver Lootbox", chance: "23%" },
                { name: "Legendary Lootbox", chance: "0.001%" }
            ]
        }
    ];

    const generatePageMessage = (page) => {
        const items = page.items.map(item => typeof item === "string" ? `- ${item}` : `- ${item.name} (${item.range})`).join("\n");
        const luckyChances = page.luckyChances ? `\n\n**Lucky Chances**\n${page.luckyChances.map(lc => `- ${lc.name}: ${lc.chance}`).join("\n")}` : "";
        return `**${page.title}**\n${items}${luckyChances}`;
    };

    const message = `**Bakeshop - Available Items**\n\n${generatePageMessage(pages[0])}`;

    api.sendMessage(message, event.threadID);
};
