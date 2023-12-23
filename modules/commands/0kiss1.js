const fs = require("fs");
module.exports.config = {
	name: "zkiss1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "zkiss",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pa kiss")==0 || event.body.indexOf("Pa kiss")==0 || event.body.indexOf("penge kiss")==0 || event.body.indexOf("Penge kiss")==0) {
		var msg = {
				body: "mwahhhhh",
				attachment: fs.createReadStream(__dirname + `/noprefix/kkk.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }