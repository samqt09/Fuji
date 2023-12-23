module.exports.config = {
    name: "robbery",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Draff",
    description: "Attempt to rob a random person and steal their money.",
    commandCategory: "fun",
    cooldowns: 1.70
};

module.exports.run = async ({ api, event, Currencies }) => {
    const userIds = Object.keys(api.getCurrentThreadMembers());
    userIds.splice(userIds.indexOf(event.senderID), 1); // Remove the bot's ID from the list
    const randomIndex = Math.floor(Math.random() * userIds.length);
    const targetUserId = userIds[randomIndex];
    
    const yourBalance = await Currencies.getCoin(event.senderID);
    const userBalance = await Currencies.getCoin(targetUserId);

    if (yourBalance === 0) {
        return api.sendMessage("You don't have any money to rob with. Get some money first!", event.threadID);
    }

    if (userBalance === 0) {
        return api.sendMessage("The unsuspecting person you attempted to rob has no money to steal.", event.threadID);
    }

    const successRate = Math.random(); // A random number between 0 and 1

    if (successRate <= 0.8) { // 80% success rate
        const maxStolenAmount = Math.min(userBalance, 50000000); // Maximum stolen amount capped at 50,000,000
        const moneyStolen = Math.floor(Math.random() * (maxStolenAmount - 1000000 + 1)) + 1000000; // Random amount between 1,000,000 and maxStolenAmount
        await Currencies.decreaseCoin(targetUserId, moneyStolen);
        await Currencies.increaseCoin(event.senderID, moneyStolen);
        
        const droppedAmount = Math.floor(moneyStolen * 0.01); // 1% of the stolen amount dropped
        await Currencies.decreaseCoin(event.senderID, droppedAmount);
        
        api.sendMessage(`You stole BASICALLY EVERYTHING YOU POSSIBLY COULD LMFAO\nYou managed to get:\n⏣ ${moneyStolen.toLocaleString()} (but ⏣ ${droppedAmount.toLocaleString()} dropped on the ground while escaping)`, event.threadID);

        if (moneyStolen === maxStolenAmount) {
            api.sendMessage(`You got away with it all! You stole an enormous amount of ⏣ ${moneyStolen.toLocaleString()}!`, event.threadID);
        }
    } else {
        const lostMoney = Math.floor(Math.random() * yourBalance * 0.2) + 1; // 20% chance of losing money
        await Currencies.decreaseCoin(event.senderID, lostMoney);
        api.sendMessage(`Uh-oh! Your attempt to rob goes wrong, and you lose ⏣ ${lostMoney.toLocaleString()} while escaping.`, event.threadID);
    }
};
