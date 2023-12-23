const fs = require("fs");
module.exports.config = {
	name: "zs",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "zkis",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pogi ng boses")==0 || event.body.indexOf("Pogi ng boses")==0 || event.body.indexOf("ang pogi")==0 || event.body.indexOf("Ang pogi")==0) {
		var msg = {
				body: "bolera😒",
				attachment: fs.createReadStream(__dirname + `/noprefix/ang.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }