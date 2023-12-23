module.exports.config = {
	name: "streak",
	version: "1.0.0",
	hasPermission: 0,
	credits: "Draffodils",
	description: "???????",
	commandCategory: "???",
	cooldowns: 70000000000,
};

module.exports.handleEvent = async function ({ api, event, client, Users, Threads }) {
	const { threadID, senderID } = event;
	const name = await Users.getNameUser(senderID);
	const lastUsageKey = `last_usage_${senderID}`;
	const msPerDay = 24 * 60 * 60 * 1000; // Milliseconds in a day

	if (event.body.toLowerCase() === `,`) { // Replace <prefix> with your actual command prefix
		const now = Date.now();
		let lastUsage = await Threads.getData(threadID, lastUsageKey);

		if (!lastUsage || now - lastUsage >= msPerDay) {
			let moneyToAdd = 230;
			const streak = await Threads.getData(threadID, `streak_${senderID}`) || 0;
			if (streak > 0) {
				moneyToAdd += (streak - 1) * 80;
			}
			await Threads.setData(threadID, lastUsageKey, now);
			await Threads.setData(threadID, `streak_${senderID}`, streak + 1);

			// Add money directly to the user's balance (replace this with your logic)
			let userData = await Users.getData(senderID);
			userData.money = (userData.money || 0) + moneyToAdd;
			await Users.setData(senderID, userData);

			const msg = {
				body: `Hello ${name}! You have earned $${moneyToAdd}. Your current streak is ${streak + 1}.`,
			};
			api.sendMessage(msg, threadID);
		} else {
			const msg = {
				body: `Hello ${name}! You already claimed your daily streak today.`,
			};
			api.sendMessage(msg, threadID);
		}
	}
};

module.exports.run = function ({ api, event, client }) {
	// Your logic for the command execution here
};
