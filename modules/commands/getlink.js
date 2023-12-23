module.exports.config = {
	name: "getlink",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Blue",
	description: "Getting a download URL from a video or audio sent by the group",
	commandCategory: "other",
	usages: "getLink",
	cooldowns: 5,
};

module.exports.languages = {
	"vi": {
		"invaidFormat": "❌ the message you respond must be an audio, video or image."
	},
	"en": {
		"invaidFormat": "❌ Your need reply a message have contain an audio, video or picture"
	}
}

module.exports.run = async ({ api, event, getText }) => {
	if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	return api.sendMessage(event.messageReply.attachments[0].url, event.threadID, event.messageID);
}