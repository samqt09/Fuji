const axios = require('axios');

module.exports.config = {
    name: "telegraph",
    version: "1.0",
    hasPermission: 0,
    credits: "draff / sensui api",
    usePrefix: true,
    description: "Upload a list of news articles to Telegraph.",
    commandCategory: "Utility",
    cooldowns: 10,
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID } = event;
    const articles = args.join(" ");

    if (!articles) {
        api.sendMessage("Please provide a JSON array of news articles.", threadID);
        return;
    }

    try {
        const response = await axios.post('https://api.telegra.ph/createPage', {
            access_token: 'YOUR_TELEGRAPH_ACCESS_TOKEN', // Replace with your Telegraph access token
            title: 'News Articles',
            content: articles,
            return_content: true
        });

        if (response.data.ok) {
            const telegraphURL = response.data.result.url;
            api.sendMessage("✅ Successfully uploaded news articles to Telegraph:\n\n" + telegraphURL, threadID);
        } else {
            api.sendMessage("Failed to upload news articles to Telegraph.", threadID);
        }
    } catch (error) {
        console.error('Error uploading news articles to Telegraph:', error);
        api.sendMessage("An error occurred while uploading news articles to Telegraph.", threadID);
    }
};
