module.exports.config = {
	name: "confess",
	version: "1.0.0",
	hasPermission: 0,
	credits: "Draffodils",
	description: "Send an anonymous confession to a user.",
	commandCategory: "Fun",
	cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users }) {
	const { threadID, senderID } = event;
	const confessedUser = args[0]; // Mentioned user UID or Facebook profile link
	const confessionMessage = args.slice(1).join(" "); // Extract confession message

	if (!confessedUser) {
		return api.sendMessage("Please provide a user's UID or Facebook profile link to confess to.", threadID);
	}

	if (!confessionMessage) {
		return api.sendMessage("Please provide a confession message.", threadID);
	}

	const anonymousName = "Anonymous"; // You can customize the anonymous sender's name

	let confessedUserID = confessedUser; // Assume the input is UID

	// If the input is a Facebook profile link, extract the UID
	if (confessedUser.includes("facebook.com")) {
		const uidMatch = confessedUser.match(/\/(\d+)/);
		if (uidMatch && uidMatch[1]) {
			confessedUserID = uidMatch[1];
		}
	}

	// Get the name of the confessed user
	const confessedUserName = (await Users.getData(confessedUserID)).name || "User";

	const confession = `Confession from ${anonymousName}:\n\n${confessionMessage}`;

	// Send the confession message as anonymous in a private message
	api.sendMessage({
		body: confession,
		mentions: [{
			tag: confessedUserName,
			id: confessedUserID
		}]
	}, confessedUserID);

	// Notify the confessing user
	api.sendMessage("Your confession has been sent anonymously.", senderID);
};
