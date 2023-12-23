module.exports.config = {
  name: "autosend1",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Prince Sanel Osorio",
  description: "SECRET CODE [!]",
  commandCategory: "Random",
  cooldowns: 0
};

module.exports.handleEvent = async ({ api, event }) => {
	const { threadID, messageID, senderID } = event;
  const axios = require("axios");
  if (event.body.toLowerCase() == 'quotes' || event.body.toLowerCase() == 'quote') {
  	const response = await axios.get('https://api.quotable.io/random');
    const quote = response.data;
    const content = quote.content;
    const author = quote.author;
    const message = `"${content}"\n- ${author}`;
  	api.sendMessage(message, event.threadID, event.messageID);
  }
  if (event.body.indexOf("cassandra") == 0 || event.body.indexOf("Cassandra") == 0 || event.body.indexOf("CASSANDRA") == 0) {
  	const req = event.body;
      api.sendMessage("CASSANDRA:\nAnswering question.. please wait...", event.threadID, event.messageID);
      try {
  	const res = await axios.get(`https://school-project-lianefca.bene-edu-ph.repl.co/ask/cassandra?query=${encodeURIComponent(req)}`);
		api.sendMessage(res.data.message, threadID, messageID);
	} catch(error) {
		api.sendMessage("An error occurred", event.threadID, event.messageID);
	}
  }
  if (event.body.indexOf("chesca") == 0 || event.body.indexOf("Chesca") == 0 || event.body.indexOf("CHESCA") == 0) {
  	const req = event.body;
      api.sendMessage("CASSANDRA:\nAnswering question.. please wait...", event.threadID, event.messageID);
      try {
  	const res = await axios.get(`https://school-project-lianefca.bene-edu-ph.repl.co/ask/chesca?query=${encodeURIComponent(req)}`);
		api.sendMessage(res.data.message, threadID, messageID);
	} catch(error) {
		api.sendMessage("An error occurred", event.threadID, event.messageID);
	}
  }
  if (event.body.indexOf("gpt") == 0 || event.body.indexOf("GPT") == 0 || event.body.indexOf("Gpt") == 0 || event.body.indexOf("ai") == 0 || event.body.indexOf("Ai") == 0 || event.body.indexOf("AI") == 0 ) {
  const req = event.body;
  if (!event.body[1]) {
  	api.sendMessage("[!] Need an Prompt to Proceed.", event.threadID, event.messageID);
  }
  api.sendMessage("Answering questions.. please wait...", event.threadID, event.messageID);
   try {
  	const res = await axios.get(`https://lastamusingbusinesssoftware.hayih59124.repl.co/api/chatgpt?content=${encodeURI(req)}`);
		api.sendMessage(res.data.reply, threadID, messageID);
	} catch(error) {
		api.sendMessage("An error occurred", event.threadID, event.messageID);
	}
  	
  }
  	
  if (event.body.toLowerCase() == 'fact' || event.body.toLowerCase() == 'facts') {
  	const res = await axios.get(`https://api.popcat.xyz/fact`);
  const fact = res.data.fact;
  api.sendMessage(`Did you know?\n\n- ${fact}`, event.threadID, event.messageID)
  }
  if (event.body.toLowerCase() == 'bot' || event.body.toLowerCase() == 'box' || event.body.toLowerCase() == 'ask') {
	api.sendMessage(`[!] ALL AI AND ITS PRICE [!]\n> ${global.config.BOTNAME} BOT OWNED BY ${global.config.OWNER}\n\n\n-GPT /w Photo Recognition [ ${global.config.PREFIX}aiv3 ] = Cost: FREE\n\n- GPT-4 [ ${global.config.PREFIX}aiv2 ] = Cost: 100\n\n- GPT-TURBO-3.5 [ ${global.config.PREFIX}ai ] = Cost: 10\n\n- BOXAI [ ${global.config.PREFIX}boxv2 ] = Cost: FREE\n\n- BRAINLY [ ${global.config.PREFIX}brainly ] = Cost: FREE\n\n- DICTIONARY [ ${global.config.PREFIX}dictionary ] = Cost: FREE\n\n- CHROME [ ${global.config.PREFIX}chrome ] = Cost: FREE\n\n- BARD AI [ ${global.config.PREFIX}bard ] = Cost: FREE\n\n- CHESCA AI [ ${global.config.PREFIX}chesca or noprefix ] = Cost: FREE\n\n- CASSANDRA AI [ ${global.config.PREFIX}cassandra or noprefix ] = Cost: FREE`, event.threadID, event.messageID);
	}
	const rand = ["Anong nakakatawa?","Ge tawa pa","Nung nakakatawa?","HAHAHATDOG", "Hahahalaman", "Mwhahahaha"]
	const rand1 = rand[Math.floor(Math.random() * rand.length)]
	const mas = ["BAT KA TUMATAWA?", "Ayusin mo na ako NANGANGALAWANG NA AKO HOY", "pogi:> bat ka tumatawa?", "Ano nanamn? bat ka nanamn tumatawa?"];
	const mas1 = mas[Math.floor(Math.random() * mas.length)];
	
	if (event.body.toLowerCase().includes("hahaha")) {
		const permission = [`100016878310988`];
		if (!permission.includes(event.senderID)) return api.sendMessage(rand1, event.threadID, event.messageID);
		else{
			api.sendMessage("Hello Master Sam Ramos,"+mas1, threadID, messageID);
		}
	}
};
module.exports.run = async function ({ api, event, Users}) {
	const { threadID, messageID, senderID } = event;
	try {
		const permission = [`100016878310988`];
		if (!permission.includes(event.senderID)) return api.sendMessage("Hello this command is only 'noprefix' please use ur mind..", event.threadID, event.messageID);
		else { 
			api.sendMessage(`Why Master Sam Ramos? Can u please use ur mind too?????`, threadID, messageID);
		}
	} catch (error) {
		api.sendMessage("Error", threadID, messageID);
	}
                  }