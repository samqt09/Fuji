const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot3",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Remod by Prince Sanel",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  var tl = ["putangimo ka", "wag kapo mag mura ", " tanginamo weh di nga", "ang sakit mopo🥺", "🥰", "ano suntukan nalang", "mass putangimo ka😘", "-1 ka sa langit", "Don't mura me uwu." ];
  var rand = tl[Math.floor(Math.random() * tl.length)];
  var tl1 = ["mass pangit ka", "edi ikaw na cutetanginamo", "ano kapa?"];
  var rand1 = tl1[Math.floor(Math.random() * tl1.length)];
  var tl2 = [`Yes I am ${global.config.BOTNAME}`, "Why??"];
  var rand2 = tl2[Math.floor(Math.random() * tl2.length)];
  if ((event.body.toLowerCase() == "Laro") || (event.body.toLowerCase() == "laro")) {
     return api.sendMessage("️sige laro ikaw taya", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "..") || (event.body.toLowerCase() == "..")) {
     return api.sendMessage(".."   +global.config.OWNER, threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "tite") || (event.body.toLowerCase() == "Tite")) {
     return api.sendMessage("tite ka ng Tite tara dito suboin mo tite ko", threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "Prefix") || (event.body.toLowerCase() == "Pre")) {
     return api.sendMessage("「 "+global.config.BOTNAME+" Bot 」\n Prefix: » "+global.config.PREFIX+" «\nUse「 "+global.config.PREFIX+"help 」to show all bot commands.", threadID, messageID);
   };
   
   
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "Lol")) {
     return api.sendMessage("ulol bobo gago putangimo charot.", threadID, messageID);
   };
   
   
   if ((event.body.toLowerCase() == "Kae")) {
     return api.sendMessage("Sobrang ganda nyan kaya mahal na mahal ko yan eh.", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i love u") || (event.body.toLowerCase() == "I love u")) {
     return api.sendMessage("i love me🖕🏾", threadID, messageID);
   }
   
   
   if ((event.body.toLowerCase() == "Pangit mo")) {
     return api.sendMessage(rand1, threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "sam") || (event.body.toLowerCase() == "Sam")) {
     return api.sendMessage("ayieee hinahanap owner ko crush mo noh🤭", threadID, messageID);
   };
   
   if ((event.body.indexOf(`${global.config.BOTNAME}`) == 0)) {
   	return api.sendMessage(rand2, threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "sino") || (event.body.toLowerCase() == "Sino")) {
     return api.sendMessage("sino ba talaga yun para sakin🥺, "+name, threadID, messageID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("putangimo") == 0 || (event.body.indexOf("Putangimo") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }