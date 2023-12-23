const axios = require('axios');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports.config = {
    name: "bard",
    version: "1.0",
    hasPermission: 0,
    credits: "SiAM | @Siam.The.Fox",
    description: "bard",
    commandCategory: "fun",
    usages: " ", //modify it I don't know know how its use
    cooldowns: 5,
};

module.exports.run = async function ({ api, args, event }) {
  const prompt = args.join(" ");
  if (!prompt) {
    return api.sendMessage("Please provide a prompt. Usage: /bard 'prompt'", event.threadID, event.messageID);
  }

  const cookie = ''; //add your cookie


  const key = 'SiAMxPublic';

  let params = {
    prompt: encodeURIComponent(prompt),
    cookie: encodeURIComponent(cookie),
    apiKey: encodeURIComponent(key),
    attImage: "",
  };

  if (event.type === "message_reply" && event.messageReply.attachments && event.messageReply.attachments.length > 0 && ["photo", "sticker"].includes(event.messageReply.attachments[0].type)) {
    params.attImage = encodeURIComponent(event.messageReply.attachments[0].url);
  }

  try {
    const response = await axios.get("https://api.siambardproject.repl.co/getBard", { params: params });
    const result = response.data;

    let content = result.answer;
    let attachment = [];

    if (result.attachment && result.attachment.length > 0) {
      const noSpam = result.attachment.slice(0, 6);

      for (let i = 0; i < noSpam.length; i++) {
        try {
          const imageUrl = noSpam[i];
          const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
          const imageBuffer = Buffer.from(imageResponse.data, 'binary');
          const fileName = `attachment_${i}.png`;
          fs.writeFileSync(fileName, imageBuffer);
          attachment.push(fs.createReadStream(fileName));
        } catch (error) {
          console.error(`Error fetching image: ${error}`);
        }
      }
    }

    if (attachment.length > 0) {
      await api.sendMessage({
        body: content,
        attachment: attachment,
      }, event.threadID, event.messageID);

      for (let i = 0; i < attachment.length; i++) {
        fs.unlinkSync(`attachment_${i}.png`);
      }
    } else {
      await api.sendMessage({
        body: content,
      }, event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage("error...", event.threadID, event.messageID);
  }
};