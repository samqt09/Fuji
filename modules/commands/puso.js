const fs = require("fs");
module.exports.config = {
	name: "puso",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "puso",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tulong")==0 || event.body.indexOf("Tulong")==0 || event.body.indexOf("ang sakit")==0 || event.body.indexOf("Ang sakit")==0) {
		var msg = {
				body: "tulong",
				attachment: fs.createReadStream(__dirname + `/noprefix/pp.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }