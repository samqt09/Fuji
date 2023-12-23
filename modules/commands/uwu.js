const fs = require("fs");
module.exports.config = {
	name: "uwu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "uwu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("uwu")==0 || event.body.indexOf("Uwu")==0 || event.body.indexOf("owo")==0 || event.body.indexOf("owo")==0) {
		var msg = {
				body: "🇯🇵uwu",
				attachment: fs.createReadStream(__dirname + `/noprefix/uwu.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }