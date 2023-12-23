const fs = require("fs");
module.exports.config = {
	name: "sana all",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sana all",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sana all")==0 || event.body.indexOf("Sana all")==0 || event.body.indexOf("naol")==0 || event.body.indexOf("Naol")==0) {
		var msg = {
				body: "wow sana all",
				attachment: fs.createReadStream(__dirname + `/noprefix/naol.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }