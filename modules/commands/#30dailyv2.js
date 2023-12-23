const axios = require("axios");
const { Currencies } = global.nodemodule;
const cooldownTime = 1; // 12 hours in milliseconds
const rewardCoin = 81000;

module.exports.config = {
    name: "daily",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Get 81000 coins every day!",
    commandCategory: "economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: cooldownTime,
        rewardCoin: rewardCoin
    }
};

module.exports.run = async ({ api, event, Currencies }) => {
    const { threadID, senderID } = event;
    const data = (await Currencies.getData(senderID)).data || {};

    if (data.dailyCoolDown && Date.now() - data.dailyCoolDown < cooldownTime) {
        const remainingTime = data.dailyCoolDown + cooldownTime - Date.now();
        const hours = Math.floor(remainingTime / 3600000);
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        const cooldownMessage = `You received today's rewards, please come back after: ${hours} hours ${minutes} minutes ${seconds} seconds.`;

        return api.sendMessage(cooldownMessage, threadID);
    }

    await Currencies.increaseMoney(senderID, rewardCoin);
    data.dailyCoolDown = Date.now();
    await Currencies.setData(senderID, { data });

    const rewardedMessage = `You received $${rewardCoin}, to continue to receive, please try again after 12 hours`;
    api.sendMessage(rewardedMessage, threadID);

    const image = (await axios.get("https://i.imgur.com/6naUyFA.gif", {
        responseType: "stream"
    })).data;

    api.sendMessage({ attachment: image }, threadID, () => {});
};
          