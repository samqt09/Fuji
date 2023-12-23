module.exports.config = {
	name: "knock",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Draffodils",
	description: "Knock down opponents and earn money in a game!",
	commandCategory: "Earn money",
	cooldowns: 120,
	envConfig: {
		cooldownTime: 120  // 20 minutes in milliseconds
	}
};

module.exports.languages = {
	"en": {
		"rewarded": "You knocked down %1 using %2 and earned: $%3.",
		"workInfo": "You knocked down %1 using %2 and earned: $%3.\n\nGame Bonus: %4%"
	}
};

module.exports.run = async ({ event, api, Currencies, getText }) => {
	const { threadID, messageID, senderID } = event;

	const cooldown = global.configModule[this.config.name].cooldownTime;
	let data = (await Currencies.getData(senderID)).data || {};
	if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
		return; // Do nothing if still on cooldown
	} else {
		const opponents = [
			"John Doe",
			"Jane Smith",
			"Michael Johnson",
			"Samantha Williams",
			"Chris Brown",
			"Emily Davis",
			"David Martinez",
			"Amanda Anderson",
			"Kevin Lee",
			"Jessica Taylor",
			"Robert Wilson",
			"Sarah Jones",
			"Matthew Thompson",
			"Olivia Hernandez"
		];

		const weapons = [
			{ name: "baseball bat", emoji: "⚾" },
			{ name: "kitchen knife", emoji: "🔪" },
			{ name: "handgun", emoji: "🔫" },
			{ name: "shotgun", emoji: "🤠" },
			{ name: "assault rifle", emoji: "🔫🔫" },
			{ name: "crossbow", emoji: "🏹" },
			{ name: "chainsaw", emoji: "🪚" },
			{ name: "katana", emoji: "🗡️" }
		];

		const selectedOpponent = opponents[Math.floor(Math.random() * opponents.length)];
		const selectedWeaponObj = weapons[Math.floor(Math.random() * weapons.length)];
		const selectedWeapon = selectedWeaponObj.name;
		const weaponEmoji = selectedWeaponObj.emoji;

		const gameBonus = (Math.random() * 78) + 2; // Random game bonus from 2% to 80%
		const amount = Math.floor(Math.random() * 18990000000000) + 500000;
		const totalEarnings = amount * (gameBonus / 100);

		const workInfo = getText("workInfo", selectedOpponent, `${weaponEmoji} ${selectedWeapon}`, totalEarnings.toFixed(2), gameBonus.toFixed(2));

		await Currencies.increaseMoney(senderID, totalEarnings);
		data.workTime = Date.now();
		await Currencies.setData(senderID, { data });

		return api.sendMessage(workInfo, threadID, messageID);
	}
};
