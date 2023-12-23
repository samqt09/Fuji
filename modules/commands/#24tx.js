module.exports.config = {
    name: "tx",
    version: "1.1.1",
    hasPermission: 0,
    credits: "DC-Nam mod D-Jukie and J-JRT / Adjusted by Draffodils",
    description: "Play 'Tài Xỉu' dice game directly in the message ",
    commandCategory: "Game",
    usage: "tx [big/small] + [bet amount/all/50%]",
    cooldowns: 0,
    envConfig: {
        timeout: 3000,
        core: 3,
        api_key: "JRTvip_2200708248"
    }
}

module.exports.languages = {
    "vi": {
        // Vietnamese translations
    },
    "en": {
        "noOption1": "[⚜️]➜ You must bet 'Big' or 'Small' + the betting amount",
        "InvalidSelection": "[⚜️]➜ Your selection is invalid\n[⚜️]➜ Valid choices ↓↓💦\n • %5: %4, %5, %6\n • %1: %1, %2, %3",
        "noOption2": "[⚜️]➜ You must enter the betting amount or 'all', '50%'\n - 'all' will bet your entire current wallet balance\n - '50%' will bet 50% of your current balance",
        "InvalidBets": "[⚜️]➜ Invalid or less than %1$ betting amount",
        "notEnoughMoney": "[⚜️]➜ Not enough %1$ to start betting, You have %2$ in your wallet",
        "rollTheDice": "[⚜️]➜ 🎲 Rolling the dice...\n[⚜️]➜ Good luck :))",
        "win": "[⚜️]➜ The result is %1, you bet %2 => win\n - Received %3$\n - Current balance: %4$",
        "lose": "[⚜️]➜ The result is %1, you bet %2 => lose\n - Lost %3$\n - Current balance: %4$",
        "error": "[⚜️]➜ %1, An error occurred, please try again in a while!"
    }
}

const axios = require("axios")

module.exports.run = async ({ api, event, args, Currencies, getText }) => {
    const { threadID: tid, messageID: mid, senderID: sid } = event;
    try {
        if (!args[0]) return api.sendMessage(getText("noOption1"), tid, mid);
        
        const { name, envConfig } = this.config;
        const { timeout, core, api_key } = global.config[name];
        
        let get = (await axios.get(`https://docs-api.jrtxtracy.repl.co/game/taixiu`)).data;
        var moneyUsers = (await Currencies.getData(sid)).money;
        var choose = args[0].toLowerCase();
        var bets = parseInt(args[1]);
        var typeBig = ["big"];
        var typeSmall = ["small"];
        var other = ["all", "50%"];
        var arrayNew = [];
        
        if (!arrayNew.concat(typeBig, typeSmall).includes(choose)) return api.sendMessage(getText("InvalidSelection", typeSmall[0], typeSmall[1], typeSmall[2], typeBig[0]), tid, mid);
        
        if (!args[1]) return api.sendMessage(getText("noOption2"), tid, mid);
        
        if ((isNaN(bets) || bets < 100) && !other.includes(args[1])) return api.sendMessage(getText("InvalidBets", 100), tid, mid);
        
        if (bets > moneyUsers && !other.includes(args[1])) return api.sendMessage(getText("notEnoughMoney", ChangeCurrency(bets), ChangeCurrency(moneyUsers)), tid, mid);
        
        return api.sendMessage({
            body: getText("rollTheDice"),
            attachment: await DownLoad(get.gif)
        }, tid, (error, info) => {
            return setTimeout(CheckResult, (timeout || envConfig.timeout));
            
            async function CheckResult() {
                bets = args[1] == "all"? moneyUsers: args[1] == "50%"? moneyUsers / 2: bets;
                api.unsendMessage(info.messageID);
                
                if (typeBig.includes(choose)) {
                    choose = "big";
                } else choose = "small";
                
                if (choose == get.result) {
                    msg = "win", as = "increaseMoney", bets = bets * (core || envConfig.core), moneyUser = moneyUsers + parseInt(bets);
                } else msg = "lose", as = "decreaseMoney", bets = bets, moneyUser = moneyUsers - parseInt(bets);
                
                return api.sendMessage({
                    body: getText(msg, get.result + ' ' + get.total, choose, ChangeCurrency(bets), ChangeCurrency(moneyUser)),
                    attachment: await DownLoad(get.images)
                }, tid, () => Currencies[as](sid, bets), mid);
            }
        }, mid);
    } catch (e) {
        api.sendMessage(getText("error", e), tid);
    }
}

function ChangeCurrency(number) {
    return number.toLocaleString("en-US")
}

async function DownLoad(url) {
    if (typeof url == "object") {
        var attachment = [];
        
        for (let i of url) {
            var resp = (await axios.get(i, {
                responseType: "stream"
            })).data;
            
            attachment.push(resp);
        }
        
        return attachment;
    }
    
    return (await axios.get(url, {
        responseType: "stream"
    })).data;
}
