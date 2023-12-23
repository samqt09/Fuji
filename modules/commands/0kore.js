const fs = require("fs");
module.exports.config = {
	name: "zkore",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "zkore",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Korean")==0 || event.body.indexOf("Korean")==0 || event.body.indexOf("kpop")==0 || event.body.indexOf("Kpop")==0) {
		var msg = {
				body: "haha😅😅",
				attachment: fs.createReadStream(__dirname + `/noprefix/kore.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }