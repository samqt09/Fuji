const axios = require("axios");
const { Currencies } = global.nodemodule;
const cooldownTime = 3600000; // 1 hour in milliseconds
const rewardCoin = 13000;

module.exports.config = {
    name: "hourlybox",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Get 13,000 coins every hour!",
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

    if (data.hourlyCoolDown && Date.now() - data.hourlyCoolDown < cooldownTime) {
        const remainingTime = data.hourlyCoolDown + cooldownTime - Date.now();
        const hours = Math.floor(remainingTime / 3600000);
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        const cooldownMessage = `You received your hourly reward, please come back after: ${hours} hours ${minutes} minutes ${seconds} seconds.`;

        return api.sendMessage(cooldownMessage, threadID);
    }

    await Currencies.increaseMoney(senderID, rewardCoin);
    data.hourlyCoolDown = Date.now();
    await Currencies.setData(senderID, { data });

    const rewardedMessage = `You received $${rewardCoin}, to continue to receive, please try again after 1 hour`;
    api.sendMessage(rewardedMessage, threadID);

    const imageResponse = await axios.get("https://i.imgur.com/5LSLqxH.gif", {
        responseType: "stream"
    });

    api.sendMessage({
        attachment: imageResponse.data
    }, threadID, () => {});
};
                             