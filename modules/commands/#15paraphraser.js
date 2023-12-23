const axios = require('axios');

module.exports.config = {
    name: "paraphraser",
    version: "1.0",
    hasPermission: 0,
    credits: "Draff / Sensui Api",
    usePrefix: true,
    description: "Paraphrase text or long sentences.",
    commandCategory: "Utility",
    cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID } = event;
    const text = args.join(" ");
    
    if (!text) {
        api.sendMessage("Please provide a text to paraphrase.", threadID);
        return;
    }

    try {
        const response = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/paraphrase?text=${encodeURIComponent(text)}`);
        const paraphrasedText = response.data.paraphrased;

        if (paraphrasedText) {
            api.sendMessage("🔄 Paraphrased Text:\n\n" + paraphrasedText, threadID);
        } else {
            api.sendMessage("Unable to paraphrase the text.", threadID);
        }
    } catch (error) {
        console.error('Error paraphrasing text:', error);
        api.sendMessage("An error occurred while paraphrasing the text.", threadID);
    }
};
