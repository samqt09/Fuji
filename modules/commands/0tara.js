const fs = require("fs");
module.exports.config = {
	name: "tara",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tara",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Shabu")==0 || event.body.indexOf("shabu")==0 || event.body.indexOf("Tara")==0 || event.body.indexOf("tara")==0) {
		var msg = {
				body: "tara shabu🗣️",
				attachment: fs.createReadStream(__dirname + `/noprefix/tara.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇵🇭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }