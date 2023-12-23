const axios = require("axios");
const cheerio = require("cheerio");

module.exports.config = {
	name: "modapk",
	version: "1.0.0",
	credits: "Draffodils",
	description: "Searches for modded apps based on a game name.",
	commandCategory: "General",
	usage: "modapk [game name]",
	cooldowns: 5 // Cooldown time in seconds
};

module.exports.run = async ({ api, event, args }) => {
	const gameName = args.join(" ");
	const searchUrl = `https://t.me/AndrojungleOfficial`;

	try {
		const response = await axios.get(searchUrl);
		const $ = cheerio.load(response.data);
		const results = [];

		$("a").each((index, element) => {
			const title = $(element).text();
			const link = $(element).attr("href");
			if (link.includes("https://gamedva.com")) {
				results.push({ title, link });
			}
		});

		if (results.length > 0) {
			let message = `Search results for "${gameName}":\n\n`;
			results.slice(0, 5).forEach((result) => {
				message += `${result.title}\n${result.link}\n\n`;
			});
			api.sendMessage(message, event.threadID);
		} else {
			api.sendMessage(`No modded APKs found for "${gameName}".`, event.threadID);
		}
	} catch (error) {
		api.sendMessage(`An error occurred while searching for "${gameName}".`, event.threadID);
	}
};
