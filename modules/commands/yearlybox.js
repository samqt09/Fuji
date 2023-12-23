const axios = require("axios");
const { Currencies } = global.nodemodule;
const cooldownTime = 31536000000; // 1 year in milliseconds
const rewardCoin = 4700000; // 1.3 million

module.exports.config = {
    name: "yearlybox",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Get 47 million coins every year!",
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

    if (data.yearlyCoolDown && Date.now() - data.yearlyCoolDown < cooldownTime) {
        const remainingTime = data.yearlyCoolDown + cooldownTime - Date.now();
        const years = Math.floor(remainingTime / 31536000000);
        const days = Math.floor((remainingTime % 31536000000) / 86400000);
        const hours = Math.floor((remainingTime % 86400000) / 3600000);
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        const cooldownMessage = `You received your yearly reward, please come back after: ${years} years ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`;

        return api.sendMessage(cooldownMessage, threadID);
    }

    await Currencies.increaseMoney(senderID, rewardCoin);
    data.yearlyCoolDown = Date.now();
    await Currencies.setData(senderID, { data });

    const rewardedMessage = `You received $${rewardCoin.toLocaleString()}, to continue to receive, please try again after 1 year`;
    api.sendMessage(rewardedMessage, threadID);

    const imageResponse = await axios.get("https://i.imgur.com/pmTLAmO.gif", {
        responseType: "stream"
    });

    api.sendMessage({
        attachment: imageResponse.data
    }, threadID, () => {});
};
      