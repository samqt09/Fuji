const axios = require("axios");
const { Currencies } = global.nodemodule;
const cooldownTime = 2592000000; // 30 days in milliseconds
const rewardCoin = 750000;

module.exports.config = {
    name: "monthlybox",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Get 750K coins every month!",
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

    if (data.monthlyCoolDown && Date.now() - data.monthlyCoolDown < cooldownTime) {
        const remainingTime = data.monthlyCoolDown + cooldownTime - Date.now();
        const days = Math.floor(remainingTime / 86400000);
        const hours = Math.floor((remainingTime % 86400000) / 3600000);
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        const cooldownMessage = `You received your monthly reward, please come back after: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`;

        return api.sendMessage(cooldownMessage, threadID);
    }

    await Currencies.increaseMoney(senderID, rewardCoin);
    data.monthlyCoolDown = Date.now();
    await Currencies.setData(senderID, { data });

    const rewardedMessage = `You received $${rewardCoin}, to continue to receive, please try again after 30 days`;
    api.sendMessage(rewardedMessage, threadID);

    const imageResponse = await axios.get("https://i.imgur.com/3kUFK23.gif", {
        responseType: "stream"
    });

    api.sendMessage({
        attachment: imageResponse.data
    }, threadID, () => {});
};
