const axios = require('axios');

module.exports.config = {
    name: "blackbox",
    version: "1.0",
    hasPermission: 0,
    credits: "Draff",
    usePrefix: true,
    description: "Ask a question and get a response from the blackbox AI.",
    commandCategory: "AI",
    cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID } = event;
    const question = args.join(" ");

    if (!question) {
        api.sendMessage("Please provide a question.", threadID);
        return;
    }

    try {
        const response = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/blackai?question=${encodeURIComponent(question)}`);
        
        if (response.data.response) {
            const aiResponse = response.data.response;
            api.sendMessage(`🤖 AI Response: ${aiResponse}`, threadID);
        } else {
            api.sendMessage("No response received from the blackbox AI.", threadID);
        }
    } catch (error) {
        console.error('Error fetching AI response:', error);
        api.sendMessage("An error occurred while fetching the AI response.", threadID);
    }
};
