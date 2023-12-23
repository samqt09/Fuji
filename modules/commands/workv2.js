module.exports.config = {
	name: "workv3",
	version: "1.0.9",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "If you work, you can earn money!",
	commandCategory: "Earn money",
	cooldowns: 120000,
	envConfig: {
		cooldownTime: 120000  // 20 minutes in milliseconds
	}
};

module.exports.languages = {
	"en": {
		"cooldown": "You have worked today, to avoid exhaustion please come back after: %1 minute(s) %2 second(s).",
		"rewarded": "You did the job %1 and received: %2.",
		"taxesApplied": "Taxes have been applied. Your earnings are: %1.",
		"workInfo": "—      %1  %2  —\n- Tax: %3\n- Profit: %4\n- Bonus Salary: %5\nExpenses: %6% (💰 %7) Reason: %8\n\nYou did the job %1 and received: %9."
	}
};

module.exports.run = async ({ event, api, Currencies, getText }) => {
	const { threadID, messageID, senderID } = event;

	const cooldown = global.configModule[this.config.name].cooldownTime;
	let data = (await Currencies.getData(senderID)).data || {};
	if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
		const time = cooldown - (Date.now() - data.workTime);
		const minutes = Math.floor(time / 60000);
		const seconds = ((time % 60000) / 1000).toFixed(0);

		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), threadID, messageID);
	} else {
		const jobs = [
			"Veterinarian",
			"Pharmacist",
			"Dank Memer Shopkeeper",
			"Lawyer",
			"Developer",
			"Day Trader",
			"Santa Claus",
			"Politician",
			"Teacher",
			"Musician",
			"Pro Gamer",
			"Manager",
			"Discord Mod",
			"Babysitter",
			"Fast Food Cook",
			"House Wife",
			"Mechanic",
			"Photographer",
			"Chef",
			"Artist",
			"Delivery Driver",
			"Senior Moderator",
			"Astronomer",
			"Virus Fixer",
			"Dessert Maker",
			"Nurse"
		];

		const jobDescriptions = {
			"Veterinarian": "⚕️",
			"Pharmacist": "💊",
			"Dank Memer Shopkeeper": "🛒",
			"Lawyer": "👨‍⚖️",
			"Developer": "💻",
			"Day Trader": "📈",
			"Santa Claus": "🎅",
			"Politician": "🎩",
			"Teacher": "🎓",
			"Musician": "🎵",
			"Pro Gamer": "🎮",
			"Manager": "👔",
			"Discord Mod": "🛡️",
			"Babysitter": "👶",
			"Fast Food Cook": "🍔",
			"House Wife": "🏠",
			"Mechanic": "🔧",
			"Photographer": "📷",
			"Chef": "👨‍🍳",
			"Artist": "🎨",
			"Delivery Driver": "🚚",
			"Senior Moderator": "🔗",
			"Astronomer": "🔭",
			"Virus Fixer": "🦠",
			"Dessert Maker": "🍰",
			"Nurse": "⚕️"
		};

		const selectedJob = jobs[Math.floor(Math.random() * jobs.length)];
		const jobEmoji = jobDescriptions[selectedJob];
		const amount = Math.floor(Math.random() * 600);
		const workShift = data.workShift || 0;

		const profitRate = 0.45; // 45% profit rate
		const taxRate = 0.10; // 10% tax rate
		const bonusSalaryRate = Math.random() * 1300; // Random bonus salary rate from 0% to 1300%
		const bonusEarnings = Math.floor(amount * (bonusSalaryRate / 100));

		const baseEarnings = amount * (1 + profitRate);
		const taxedEarnings = baseEarnings * (1 - taxRate);

		const expensesPercentage = Math.random() * 25; // Random expenses percentage from 0% to 25%
		const expensesDeducted = Math.floor(baseEarnings * expensesPercentage / 100);
		const expensesReasons = [
			"Equipment maintenance",
			"Training costs",
			"Operational expenses",
			"Supplies and materials"
		];
		const reason = expensesReasons[Math.floor(Math.random() * expensesReasons.length)];

		const totalReceived = taxedEarnings - expensesDeducted + bonusEarnings;

		const workInfo = getText("workInfo", selectedJob, jobEmoji, 
			`${Math.floor(taxRate * 100)}% 💰 ${Math.floor(baseEarnings * taxRate)}`,
			`${Math.floor(profitRate * 100)}% 💰 ${Math
			.floor(baseEarnings * profitRate)}`,
			`${bonusSalaryRate.toFixed(2)}% 💰 ${bonusEarnings}`,
			expensesPercentage.toFixed(2),
			expensesDeducted,
			reason,
			totalReceived.toFixed(2));

		return api.sendMessage(workInfo, threadID, async () => {
			await Currencies.increaseMoney(senderID, totalReceived);
			data.workTime = Date.now();
			data.workShift = workShift + 1;
			await Currencies.setData(senderID, { data });
		}, messageID);
	}
};
