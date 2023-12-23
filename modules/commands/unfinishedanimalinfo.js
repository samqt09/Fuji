module.exports.config = {
name: "animalinfo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "View information about animals.",
	commandCategory: "Economy",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => { // Add 'event' parameter here
	const animals = [
		{
			name: "Deer",
			emoji: "🦌",
			family: "Cervidae",
			priceRange: "500 - 47,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Low",
			healthRange: "10 HP - 32,000 HP"
		},
		{
			name: "Rabbit",
			emoji: "🐇",
			family: "Leporidae",
			priceRange: "500 - 47,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Low",
			healthRange: "10 HP - 32,000 HP"
		},
		{
			name: "Peacock",
			emoji: "🦚",
			family: "Phasianidae",
			priceRange: "1,000 - 60,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Moderate",
			healthRange: "20 HP - 40,000 HP"
		},
		{
			name: "Sheep",
			emoji: "🐑",
			family: "Bovidae",
			priceRange: "800 - 45,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Low",
			healthRange: "15 HP - 35,000 HP"
		},
		{
			name: "Bison",
			emoji: "🐃",
			family: "Bovidae",
			priceRange: "1,500 - 80,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "High",
			healthRange: "25 HP - 50,000 HP"
		},
		{
			name: "Sloth",
			emoji: "🦥",
			family: "Megalonichidae",
			priceRange: "2,000 - 90,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Low",
			healthRange: "15 HP - 30,000 HP"
		},
		{
			name: "Dog",
			emoji: "🦮",
			family: "Canidae",
			priceRange: "1,200 - 65,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Moderate",
			healthRange: "18 HP - 36,000 HP"
		},
		{
			name: "Earthworm",
			emoji: "🪱",
			family: "Lumbricidae",
			priceRange: "100 - 10,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Low",
			healthRange: "5 HP - 10,000 HP"
		},
		{
			name: "Fly",
			emoji: "🪳",
			family: "Diptera",
			priceRange: "50 - 5,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Low",
			healthRange: "3 HP - 6,000 HP"
		},
		{
			name: "Dinosaur",
			emoji: "🦖",
			family: "Non-Avian Dinosaurs",
			priceRange: "10,000 - 300,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "High",
			healthRange: "50 HP - 500,000 HP"
		},
		{
			name: "Kangaroo",
			emoji: "🦘",
			family: "Macropodidae",
			priceRange: "1,800 - 70,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Moderate",
			healthRange: "20 HP - 45,000 HP"
		},
		{
			name: "Badger",
			emoji: "🦡",
			family: "Mustelidae",
			priceRange: "1,500 - 75,000",
			level: Math.floor(Math.random() * 11) + 1,
			power: "Moderate",
			healthRange: "20 HP - 38,000 HP"
		}
	];

	let informationText = "Animal Information:\n\n";
	for (const animal of animals) {
		const animalName = animal.name;
		const animalEmoji = animal.emoji;
		const animalFamily = animal.family;
		const animalPriceRange = animal.priceRange;
		const animalLevel = animal.level;
		const animalPower = animal.power;
		const animalHealthRange = animal.healthRange;

		informationText += `${animalEmoji} ${animalName}\n`;
		informationText += `- Family: ${animalFamily}\n`;
		informationText += `- Price Range: ${animalPriceRange}\n`;
		informationText += `- Level: ${animalLevel}\n`;
		informationText += `- Power: ${animalPower}\n`;
		informationText += `- Health Range: ${animalHealthRange}\n\n`;
	}

	api.sendMessage(informationText, event.threadID);
};
