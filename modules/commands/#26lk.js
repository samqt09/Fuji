const axios = require("axios");
module.exports.config = {
  name: "horse",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Araxy XD",
  description: "Horse Racing",
  commandCategory: "Game",
  usage: "horse [black/red/yellow/green/pink] + amount",
  cooldowns: 0
};
module.exports.run = async ({ api, event, Threads, args, Currencies }) => {
  const { threadID, messageID, senderID } = event;
  const choices = ["black", "red", "yellow", "green", "pink"];
  if (!choices.includes(args[0])) {
    return api.sendMessage('Invalid Choice, Please Try Again', threadID, messageID);
  } else {
    const dataMoney = await Currencies.getData(senderID);
    const userMoney = dataMoney.money;
    if (userMoney < 100) {
      return api.sendMessage('Your balance is less than 100, not enough to play', threadID, messageID);
    } else if (userMoney < args[1]) {
      return api.sendMessage(`Your balance is not enough to play`, threadID, messageID);
    }
    var selectedColor = choices[Math.floor(Math.random() * choices.length)];
    const amount = args[1];
    let image = (await axios.get("https://imgur.com/or4ox3W.gif", {
      responseType: "stream"
    })).data;
    var msg = { body: 'Please Wait for the Result', attachment: image };
    api.sendMessage(msg, event.threadID, async (err, info) => {
      await new Promise(resolve => setTimeout(resolve, 5 * 1000));
      if (selectedColor == args[0]) {
        await Currencies.increaseMoney(senderID, parseInt(amount * 2));
        return api.sendMessage(`You won with the horse ${args[0]} and received ${amount * 2} money`, threadID, messageID);
      } else {
        await Currencies.decreaseMoney(senderID, parseInt(amount));
        return api.sendMessage(`You lost, the horse ${selectedColor} came first and you lost ${amount} money`, threadID, messageID);
      }
    });
  }
};
