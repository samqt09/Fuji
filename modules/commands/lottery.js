module.exports.config = {
    name: "lottery",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Draffodils ",
    description: "Participate in a lottery and win prizes.",
    commandCategory: "economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 60000, // 1 minute in milliseconds
        ticketPrice: 20000000, // 20 million
        maxEntries: 10000, // Maximum entries per round
    }
};

module.exports.languages = {
    "en": {
        "cooldown": "Please wait %1 before buying another ticket.",
        "not_enough_money": "You don't have enough money to buy a ticket.",
        "bought_ticket": "You bought %1 lottery ticket(s) for a total cost of ⏣ %2.",
        "results": "%1 walked away with ⏣ %2\nThey paid: ⏣ %3 (%4 entries)\nProfit: %5%",
        "no_participants": "No one participated in this round of the lottery.",
    }
};

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { lottery } = global.configModule,
        cooldownTime = lottery.cooldownTime,
        ticketPrice = lottery.ticketPrice,
        maxEntries = lottery.maxEntries;

    var { senderID, threadID, messageID } = event;

    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldownTime - (Date.now() - (data.lotteryCoolDown || 0)) > 0) {
        var timeLeft = cooldownTime - (Date.now() - data.lotteryCoolDown);
        return api.sendMessage(getText("cooldown", `${Math.floor(timeLeft / 1000)} seconds`), threadID, messageID);
    } else {
        if (data.money < ticketPrice) {
            return api.sendMessage(getText("not_enough_money"), threadID, messageID);
        }

        const numTickets = Math.min(maxEntries, Math.floor(data.money / ticketPrice));
        const totalCost = numTickets * ticketPrice;
        const potentialWinners = ["user1", "user2", "user3"]; // List of potential winners

        const winnerIndex = Math.floor(Math.random() * potentialWinners.length);
        const winner = potentialWinners[winnerIndex];

        const profitPercentage = Math.floor(Math.random() * 100) + 1; // Random profit between 1% and 100%

        await Currencies.decreaseMoney(senderID, totalCost);

        return api.sendMessage(getText("bought_ticket", numTickets, totalCost), threadID, async () => {
            await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute for results

            if (winner) {
                const winAmount = totalCost * (1 + profitPercentage / 100);
                await Currencies.increaseMoney(winner, winAmount);
                api.sendMessage(
                    getText("results", winner, winAmount, totalCost, numTickets, profitPercentage),
                    threadID
                );
            } else {
                api.sendMessage(getText("no_participants"), threadID);
            }

            data.lotteryCoolDown = Date.now();
            await Currencies.setData(senderID, { data });
            return;
        }, messageID);
    }
};
