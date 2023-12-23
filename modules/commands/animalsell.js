module.exports.config = {
    name: "animalsell",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Draffodils",
    description: "Sell animals and animal food for random prices and profits.",
    commandCategory: "Economy",
    cooldowns: 5
};

module.exports.run = async ({ event, api, Currencies }) => {
    const { threadID, senderID } = event;
    
    const animals = [
        { name: "Deer", emoji: "🦌" },
        { name: "Rabbit", emoji: "🐇" },
        { name: "Fox", emoji: "🦊" },
        { name: "Bear", emoji: "🐻" },
        { name: "Squirrel", emoji: "🐿️" },
        { name: "Bug", emoji: "🪳" },
        { name: "Worm", emoji: "🪱" },
        { name: "Dog", emoji: "🦮" },
        { name: "Sloth", emoji: "🦥" },
        { name: "Buffalo", emoji: "🐃" },
        { name: "Sheep", emoji: "🐑" },
        { name: "Peacock", emoji: "🦚" },
        { name: "Mosquito", emoji: "🦟" },
        { name: "Parrot", emoji: "🦜" },
        { name: "Crab", emoji: "🦀" },
        { name: "Shark", emoji: "🦈" },
        { name: "Pufferfish", emoji: "🐡" }
    ];

    const animalFoods = [
        { name: "Animal Food 1", emoji: "🥤" },
        { name: "Animal Food 2", emoji: "🥫" },
        { name: "Animal Food 3", emoji: "🥥" },
        { name: "Animal Food 4", emoji: "🍩" },
        { name: "Animal Food 5", emoji: "🍰" },
        { name: "Animal Food 6", emoji: "🍘" },
        { name: "Animal Food 7", emoji: "🍣" },
        { name: "Animal Food 8", emoji: "🍤" },
        { name: "Animal Food 9", emoji: "🍠" }
    ];
    
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const { name: animalName, emoji: animalEmoji } = randomAnimal;

    const randomFood = animalFoods[Math.floor(Math.random() * animalFoods.length)];
    const { name: foodName, emoji: foodEmoji } = randomFood;

    const minPrice = 0.001;
    const maxPrice = 80000;
    const minProfit = 5.800;
    const maxProfit = 1350;

    const animalPrice = Math.random() * (maxPrice - minPrice) + minPrice;
    const animalProfit = Math.random() * (maxProfit - minProfit) + minProfit;

    const totalPrice = animalPrice + animalProfit;

    const message = `
        You sold a ${animalName} ${animalEmoji} and ${foodName} ${foodEmoji}!\n
        📦 Price: $${animalPrice.toFixed(3)}\n
        💰 Profit: $${animalProfit.toFixed(3)}\n
        📈 Total Sell Price: $${totalPrice.toFixed(3)}
    `;

    api.sendMessage(message, threadID);

    // Add the total sell price to the user's currency balance
    await Currencies.increaseMoney(senderID, totalPrice);
};
