const axios = require("axios");
const { Currencies } = global.nodemodule;
const cooldownTime = 800000; // 13 minutes in milliseconds
const bonusMultiplier = 6; // 500% ultra bonus
const initialStocks = 1; // Initial stocks
const maxStocks = 8; // Maximum stocks after restock
const restockInterval = 3600000; // 1 hour in milliseconds

let stonkStocks = initialStocks;
let lastRestockTime = Date.now();

module.exports.config = {
    name: "stonkcoin",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Draffodils",
    description: "Get 70,200 + 500% bonus coins (limited stocks, restocks after 1 hour)!",
    commandCategory: "economy",
    cooldowns: 0,
};

module.exports.run = async ({ api, event, Currencies, args }) => {
    const { threadID, senderID } = event;

    if (args[0] === "stock") {
        return api.sendMessage(`The current stonkcoin stock is: ${stonkStocks}`, threadID);
    }

    if (stonkStocks === 0) {
        if (Date.now() - lastRestockTime >= restockInterval) {
            stonkStocks = maxStocks;
            lastRestockTime = Date.now();
            api.sendMessage(`Stonkcoin stocks have been restocked to ${maxStocks}.`, threadID);
        } else {
            const remainingTime = lastRestockTime + restockInterval - Date.now();
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 60000) / 1000);
            return api.sendMessage(`Stonkcoin stocks are currently sold out. Restocking in: ${minutes} minutes ${seconds} seconds.`, threadID);
        }
    }

    if (Date.now() - lastRestockTime >= restockInterval) {
        stonkStocks = maxStocks;
        lastRestockTime = Date.now();
        api.sendMessage(`Stonkcoin stocks have been restocked to ${maxStocks}.`, threadID);
    }

    if (Date.now() - lastRestockTime < restockInterval && stonkStocks > 0) {
        const data = (await Currencies.getData(senderID)).data || {};

        if (data.stonkCoolDown && Date.now() - data.stonkCoolDown < cooldownTime) {
            const remainingTime = data.stonkCoolDown + cooldownTime - Date.now();
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 60000) / 1000);
            const cooldownMessage = `You already used the stonk coin, please come back after: ${minutes} minutes ${seconds} seconds.`;

            return api.sendMessage(cooldownMessage, threadID);
        }

        const initialReward = 70200;
        const bonusCoins = Math.round(initialReward * bonusMultiplier);
        const totalCoins = initialReward + bonusCoins;

        await Currencies.increaseMoney(senderID, totalCoins);
        data.stonkCoolDown = Date.now();
        await Currencies.setData(senderID, { data });

        stonkStocks--;
        api.sendMessage(`Congratulations! You used the stonk coin and received a 600% + ultra bonus: $${totalCoins.toLocaleString()} (Initial: $${initialReward.toLocaleString()}, Bonus: $${bonusCoins.toLocaleString()})`, threadID);

        const imageResponse = await axios.get("https://i.imgur.com/GHs56f4.gif", {
            responseType: "stream"
        });

        api.sendMessage({
            attachment: imageResponse.data
        }, threadID, () => {});
    }
};
          