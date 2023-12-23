module.exports.config = {
  name: "goiadmin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Jasper",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100016878310988") {
    var aid = ["100016878310988"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tinatag pa anong satin ha", "aba aba tinatag nga bat ba ha???!!!", "sinasabi ko sayo iba ako magalit bat moba tinatag admin ko, ay be gusto mo ba owner ko?","hala sorry idolo wala pa si sam ih"," hala hinahanap si sam miss mo ayieee."];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}