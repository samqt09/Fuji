const fs = require("fs");
module.exports.config = {
	name: "zara",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ara",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yamero")==0 || event.body.indexOf("yamero")==0 || event.body.indexOf("ara")==0 || event.body.indexOf("Ara")==0) {
		var msg = {
				body: "🥵",
				attachment: fs.createReadStream(__dirname + `/noprefix/ara.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }