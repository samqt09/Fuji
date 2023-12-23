const fs = require("fs");
module.exports.config = {
	name: "kulit",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "kulit",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kulit")==0 || event.body.indexOf("kulit")==0 || event.body.indexOf("harot")==0 || event.body.indexOf("Harot")==0) {
		var msg = {
				body: "kulit~~",
				attachment: fs.createReadStream(__dirname + `/noprefix/kulit.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }