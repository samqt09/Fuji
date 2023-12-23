const axios = require('axios')

module.exports.config = {
     name: "beshy",
     version: "1.0",
     hasPermssion: 0,
     credits: "james",
     description: "beshy ko",
     commandCategory: "[]",
     cooldowns: 0
};
//Credits sensui for api
module.exports.run = async function ({ api, event, args }) {
 let text = args.join(" ");
  try {
    const ge = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/fun/beshie?jeje=${text}`);
    const ga = ge.data.result;
    api.sendMessage(`${ga}`, event.threadID, event.messageID);
  } catch(error) {
    console.error(error);
api.sendMessage("error", event.threadID, event.messageID)

    
  }
};