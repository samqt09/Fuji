const axios = require('axios');
const fs = require('fs');
const path = require('path');

function convertToMilliseconds(interval) {
  const multiplier = {
    'ms': 1,
    's': 1000,
    'm': 60000,
    'h': 3600000,
    'd': 86400000
  };

  const num = parseInt(interval);
  const unit = interval.replace(num, '');

  if (multiplier.hasOwnProperty(unit)) {
    return num * multiplier[unit];
  } else {
    throw new Error('Invalid time interval format.');
  }
}

module.exports.config = {
  name: 'hourlyGreetings',
  version: '1.0',
  hasPermission: 0,
  credits: 'Rickciel api sensui',
  usePrefix: true,
  description: 'Sends a message every specified interval',
  commandCategory: 'system',
  usages: '<interval>',
  cooldowns: 3
};

let hourlyMessages = []; 

module.exports.onLoad = async o => {
  try {
    const interval = convertToMilliseconds('50m');

    const response = await axios.get('https://sensui-useless-apis.codersensui.repl.co/api/fun/quote');
    const quotesData = response.data;

    if (quotesData && quotesData.quote && quotesData.author) {
      hourlyMessages = [`Hourly Quotes - ${quotesData.quote} - ${quotesData.author}`];
      
      setInterval(() => {
        const randomMessage = hourlyMessages[Math.floor(Math.random() * hourlyMessages.length)];
        global.data.allThreadID.forEach(threadID => o.api.sendMessage(randomMessage, threadID));
      }, interval);
    } else {
      console.error('Failed to fetch quotes from the API.');
    }
  } catch (error) {
    console.error('Error during onLoad:', error);
  }
};

module.exports.run = o => {};