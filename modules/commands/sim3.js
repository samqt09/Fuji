const name = global.config.BOTNAME;
const bot = name.toLowerCase();
module.exports.config = {
  name: `${bot}`, 
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel Osorio",
  description: `Chat with ${name} Bot`,
  commandCategory: "Random",
  usages: `${global.config.PREFIX}${bot} message`,
  cooldowns: 0,
};

module.exports.run = async function ({ api, event, args }) {
	var { threadID, messageID } = event;
	const axios = require("axios");
	try {
		const request = args.join(" ");
		if (!request) return api.sendMessage("[!] Need an message to proceed!", threadID, messageID);
		const res = await axios.get(`https://mainapi.princemc166.repl.co/api/sim?message=${request}`);
		api.sendMessage(res.data.message, threadID, messageID);
	} catch (error) {
		api.sendMessage("An error occured while fetching the sim api", threadID, messageID);
	}
}