const axios = require("axios");

module.exports.config = {
  name: "siri",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Matthew",
  description: "Siri 5.6 latest",
  commandCategory: "utility",
  usages: "Siriv3 [question]",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  if (!args[0]) {
    api.sendMessage("Please provide a question first.", threadID, messageID);
    return;
  }

  const query = args.join(" ");

  api.sendMessage("Processing your request on Siri 5.6, please wait...", threadID, messageID);

  try {
    const response = await axios.get(`https://official-anjelo-api-1.anjeloarabis.repl.co/siriv3?apikey=YOUR_API_KEY&ask=${encodeURIComponent(query)}`);

    if (response.status === 200 && response.data && response.data.answer) {
      const answer = response.data.answer;
      api.sendMessage(`${answer}\For more information, kindly add/follow: https://www.facebook.com/anjelogwpo`, threadID, messageID);
    } else {
      api.sendMessage("Sorry, I couldn't find an answer for your query.", threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while searching with SiriV3.", threadID, messageID);
  }
};