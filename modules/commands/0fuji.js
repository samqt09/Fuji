const fs = require("fs");
module.exports.config = {
	name: "hhhhhh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "fuji",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hello fuji")==0 || event.body.indexOf("hello fuji")==0 || event.body.indexOf("hi fuji")==0 || event.body.indexOf("Hi fuji")==0) {
		var msg = {
				body: "😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/fuji.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇯🇵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }