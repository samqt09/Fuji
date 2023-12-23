const fs = require("fs");
module.exports.config = {
	name: "sori",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "zsorry",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mag sorry")==0 || event.body.indexOf("Mag sorry")==0 || event.body.indexOf("fuji mag sorry")==0 || event.body.indexOf("Fuji mag sorry")==0) {
		var msg = {
				body: "🥺",
				attachment: fs.createReadStream(__dirname + `/noprefix/sorry.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }