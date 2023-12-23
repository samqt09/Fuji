const fs = require("fs");
module.exports.config = {
  name: "Bye",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Modified by Jonell Magallanes", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "Take your time",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("goodbye")==0 || (event.body.indexOf("Vĩnh biệt")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
    var msg = {
        body: "take your time idol and bahala kana sa buhay mo mwahh😘",
        attachment: fs.createReadStream(__dirname + `/noprefix/bye.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}