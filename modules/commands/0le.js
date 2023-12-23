const fs = require("fs");
module.exports.config = {
	name: "don't",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "don't",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("leave")==0 || event.body.indexOf("Leave")==0 || event.body.indexOf("kanta")==0 || event.body.indexOf("Kanta")==0) {
		var msg = {
				body: "don't wanna leave you anymore",
				attachment: fs.createReadStream(__dirname + `/noprefix/lev.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }