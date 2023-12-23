module.exports.config = {
    name: "mahiro",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mahiro Chan",
    description: "Ask me anything...",
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 2,
};
//Credit to: Joshua Sy for the API
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
const response = args.join(" ");
if (!args[0]) return api.sendMessage("how may i help you?", threadID, messageID);
try {
const res = await axios.get(`https://sim.ainz-project.repl.co/others/gpt?prompt=${response}`);
var respond = res.data.result;
api.sendMessage(respond, threadID , messageID);
} catch (error) {
api.sendMessage("An error occurred while making the API request.", threadID , messageID);
}
};