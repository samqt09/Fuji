const fs = require("fs");
module.exports.config = {
	name: "lc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "John Arida", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lc")==0 || (event.body.indexOf("lastchat")==0 || (event.body.indexOf("Last chat")==0 || (event.body.indexOf("last chat")==0)))) {
		var msg = {
				body: "╭────༺♡༻────╮\n         𝐋𝐜 𝐥𝐜 𝐤𝐚𝐩𝐚 𝐩𝐚𝐬𝐚𝐥𝐚𝐦𝐚𝐭 𝐤𝐚 𝐜𝐮𝐭𝐞 𝐚𝐭 𝐦𝐚𝐫𝐚𝐦𝐢𝐧𝐠 𝐧𝐚𝐠 𝐦𝐚𝐦𝐚𝐡𝐚𝐥 𝐡𝐢𝐧𝐝𝐢 𝐤𝐚𝐠𝐚𝐲𝐚 𝐦𝐨 𝐚𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧 𝐬𝐞𝐞𝐤𝐞𝐫 𝐩𝐰𝐞𝐞𝐞\n          —𝐋𝐀𝐒𝐓 𝐂𝐇𝐀𝐓— ╰────༺♡༻────╯"
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}