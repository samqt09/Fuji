const fs = require("fs");
module.exports.config = {
	name: "pogi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pogi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pogi")==0 || event.body.indexOf("Pogi")==0 || event.body.indexOf("sige na")==0 || event.body.indexOf("Sige na")==0) {
		var msg = {
				body: "pogi may nag text~~",
				attachment: fs.createReadStream(__dirname + `/noprefix/pogi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }