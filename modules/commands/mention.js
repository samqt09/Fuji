const fs = require("fs");
module.exports.config = {
  name: "mention",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Jonell Magallanes", 
  description: "mention name of bot",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Fuji Shikiromi")==0 || (event.body.indexOf("Fuji Shikiromi ")==0 || (event.body.indexOf("Bot")==0 || (event.body.indexOf("Shikiromi")==0)))) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("HH:mm:ss || D/MM/YYYY");
    var msg = {
        body: `Yes? How can i help you?`
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }