module.exports.config = {
    name: "slot3",
    version: "1.0.1",
    hasPermission: 0,
    credits: "Mirai Team",
    description: "Play a fruit-themed slot machine game!",
    commandCategory: "Game",
    usage: "slot [amount of coins to bet]",
    cooldowns: 5,
};

module.exports.languages = {
    "en": {
        "missingInput": "[⚜️]➜ The bet money must not be blank or a negative number",
        "moneyBetNotEnough": "[⚜️]➜ The money you bet is greater than or equal to your balance!",
        "limitBet": "[⚜️]➜ Your bet amount must be at least 500$!",
        "returnWin": "[⚜️]=== 『 PLAY SLOT 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Slot result:  | %1 | %2\n[⚜️]➜ You won: %3$",
        "returnLose": "[⚜️]=== 『 PLAY SLOT 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Slot result:  | %1 | %2\n[⚜️]➜ You lost and lost: %3$"
    }
};

async function getIMG(item) {
    try {
        const fruitImages = {
            "🍇": "https://imgur.com/jWmzlgG.png",
            "🍉": "https://imgur.com/FmWC4eK.png",
            "🍊": "https://imgur.com/gaUbeiY.png",
            "🍏": "https://imgur.com/gyztTV3.png",
            "🥭": "https://imgur.com/IqU7tlM.png",
            // Removed some fruits for brevity
        };

        const imgUrl = fruitImages[item] || "";
        if (imgUrl) {
            const response = await require('axios').get(imgUrl, {
                responseType: "stream"
            });
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

module.exports.run = async function ({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const slotItems = ["🍇", "🍉", "🍊", "🍏", "🧅"]; // Removed some fruits for brevity
    const moneyUser = (await getData(senderID)).money;

    const moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
    if (moneyBet > moneyUser) return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
    if (moneyBet < 500) return api.sendMessage(getText("limitBet"), threadID, messageID);

    const number = Array.from({ length: 3 }, () => Math.floor(Math.random() * slotItems.length));
    const img = [];

    for (const num of number) {
        const imgData = await getIMG(slotItems[num]);
        if (imgData) img.push(imgData);
    }

    let moneyChange = 0;
    let message = "";

    if (number[0] === number[1] && number[1] === number[2]) {
        moneyChange = moneyBet * 9;
        message = getText("returnWin");
    } else if (number.includes("🧉")) {
        moneyChange = moneyBet * 12;
        message = getText("returnWin");
    } else {
        moneyChange = -moneyBet;
        message = getText("returnLose");
    }

    await api.sendMessage({
        body: message.replace("%1", slotItems[number[0]]).replace("%2", slotItems[number[1]]).replace("%3", slotItems[number[2]]).replace("%4", moneyChange),
        attachment: img
    }, threadID, messageID);

    if (moneyChange > 0) {
        await increaseMoney(senderID, moneyChange);
    } else {
        await decreaseMoney(senderID, -moneyChange);
    }
};
