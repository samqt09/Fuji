const axios = require('axios');

module.exports.config = {
  name: 'edu',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'August Quinn',
  description: 'Get response from Gptgo API.',
  commandCategory: 'AI',
  usages: '/Gptgo',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  try {
    const apiUrl = 'https://gptgo.august-api.repl.co/response';
    const response = await axios.get(apiUrl);

    if (response.data) {
      api.sendMessage(response.data, event.threadID, event.messageID);
    } else {
      api.sendMessage('Failed to fetch response from Gptgo API.', event.threadID, event.messageID);
    }
  } catch (error) {
    console.error('Error in Gptgo command:', error);
    api.sendMessage('An error occurred. Please try again later.', event.threadID, event.messageID);
  }
};

