const fs = require("fs");
module.exports.config = {
	name: "lazada",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "laAda",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lazada")==0 || event.body.indexOf("Lazada")==0 || event.body.indexOf("lizada")==0 || event.body.indexOf("Lizada")==0) {
		var msg = {
				body: "lazada~~",
				attachment: fs.createReadStream(__dirname + `/noprefix/lazada.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }