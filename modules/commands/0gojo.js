const fs = require("fs");
module.exports.config = {
	name: "GOJO",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gojo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("putangina")==0 || event.body.indexOf("gojo")==0 || event.body.indexOf("inamo")==0 || event.body.indexOf("Putangina")==0) {
		var msg = {
				body: "whahaha",
				attachment: fs.createReadStream(__dirname + `/noprefix/gojo.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }