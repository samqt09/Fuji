module.exports.config = {
	name: "cao3",
	version: "1.0.4",
	hasPermission: 0,
	credits: "Mirai Team",
	description: "Card game 'Cào' for groups with betting",
	commandCategory: "game-rannked",
	usage: "[start/join/info/leave]",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users }) => {
	const { senderID, threadID, body, messageID } = event;

	if (typeof body === "undefined") return;
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	const values = global.moduleData.baicao.get(threadID);
	if (values.start !== 1) return;

	if (body.indexOf("deal cards") === 0) {
		if (values.chiabai === 1) return;
		for (const key in values.player) {
			const card1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			let total = card1 + card2 + card3;
			if (total >= 20) total -= 20;
			if (total >= 10) total -= 10;
			values.player[key].card1 = card1;
			values.player[key].card2 = card2;
			values.player[key].card3 = card3;
			values.player[key].total = total;
			api.sendMessage(`Your cards: ${card1} | ${card2} | ${card3}\n\nTotal cards: ${total}`, values.player[key].id, (error, info) => {
				if (error) api.sendMessage(`Unable to deal cards to user: ${values.player[key].id}`, threadID)
			});
		}
		values.chiabai = 1;
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("Cards have been dealt successfully! Everyone has 2 chances to exchange cards. If you can't see your cards, please check your pending messages.", threadID);
	}

	if (body.indexOf("exchange cards") === 0) {
		if (values.chiabai !== 1) return;
		const player = values.player.find(item => item.id === senderID);
		if (player.doibai === 0) return api.sendMessage("You have used up all your chances to exchange cards.", threadID, messageID);
		if (player.ready === true) return api.sendMessage("You are already ready. You cannot exchange cards!", threadID, messageID);
		const card = ["card1", "card2", "card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		player.total = player.card1 + player.card2 + player.card3;
		if (player.total >= 20) player.total -= 20;
		if (player.total >= 10) player.total -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(values);
		return api.sendMessage(`Your cards after exchanging: ${player.card1} | ${player.card2} | ${player.card3}\n\nTotal cards: ${player.total}`, player.id, (error, info) => {
			if (error) api.sendMessage(`Unable to exchange cards for user: ${player.id}`, threadID)
		});
	}

	if (body.indexOf("ready") === 0) {
		if (values.chiabai !== 1) return;
		const player = values.player.find(item => item.id === senderID);
		if (player.ready === true) return;
		const name = await Users.getNameUser(player.id);
		values.ready += 1;
		player.ready = true;
		if (values.player.length === values.ready) {
			const playerList = values.player;
			playerList.sort((a, b) => b.total - a.total);

			const ranking = [];
			let num = 1;

			for (const info of playerList) {
				const name = await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name} with ${info.card1} | ${info.card2} | ${info.card3} => ${info.total} points\n`);
			}

			global.moduleData.baicao.delete(threadID);
			return api.sendMessage(`Results:\n\n${ranking.join("\n")}`, threadID);
		} else {
			return api.sendMessage(`Player: ${name} is ready to reveal cards. Remaining: ${values.player.length - values.ready} players have not revealed their cards.`, event.threadID);
		}
	}

	if (body.indexOf("nonready") === 0) {
		const data = values.player.filter(item => item.ready === false);
		const msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length !== 0) return api.sendMessage("Players who are not ready include: " + msg.join(", "), threadID);
		else return;
	}
};

module.exports.run = async ({ api, event, args }) => {
	let { senderID, threadID, messageID } = event;

	threadID = String(threadID);
	senderID = String(senderID);

	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	const values = global.moduleData.baicao.get(threadID) || {};

	switch (args[0]) {
		case "create":
		case "-c": {
			if (global.moduleData.baicao.has(threadID)) return api.sendMessage("A 'Cào' card game is already in progress in this group.", threadID, messageID);
			global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ] });
			return api.sendMessage("Your 'Cào' card game has been successfully created! To join, use the command 'cao3la join'.", threadID, messageID);
		}

		case "join":
		case "-j": {
			if (!values) return api.sendMessage("No 'Cào' card game is currently available. You can create one using 'cao3la create'.", threadID, messageID);
			if (values.start === 1) return api.sendMessage("The 'Cào' card game has already started.", threadID, messageID);
			if (values.player.find(item => item.id === senderID)) return api.sendMessage("You have already joined this 'Cào' card game!", threadID,
      messageID);
			values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "total": 0, "doibai": 2, "ready": false });
			global.moduleData.baicao.set(threadID, values);
			return api.sendMessage("You have successfully joined the 'Cào' card game!", threadID, messageID);
		}

		case "leave":
		case "-l": {
			if (typeof values.player === "undefined") return api.sendMessage("No 'Cào' card game is currently available. You can create one using 'cao3la create'.", threadID, messageID);
			if (!values.player.some(item => item.id === senderID)) return api.sendMessage("You haven't joined the 'Cào' card game in this group!", threadID, messageID);
			if (values.start === 1) return api.sendMessage("The 'Cào' card game has already started.", threadID, messageID);
			if (values.author === senderID) {
				global.moduleData.baicao.delete(threadID);
				api.sendMessage("The author has left the game, which means the game will be disbanded!", threadID, messageID);
			} else {
				values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
				api.sendMessage("You have left the 'Cào' card game.", threadID, messageID);
				global.moduleData.baicao.set(threadID, values);
			}
			return;
		}

		case "start":
		case "-s": {
			if (!values) return api.sendMessage("No 'Cào' card game is currently available. You can create one using 'cao3la create'.", threadID, messageID);
			if (values.author !== senderID) return api.sendMessage("You are not the host to start the game.", threadID, messageID);
			if (values.player.length <= 1) return api.sendMessage("There are not enough players to start the game. You can invite others to join using 'cao3la join'.", threadID, messageID);
			if (values.start === 1) return api.sendMessage("The game has already been started by the host.", threadID, messageID);
			values.start = 1;
			return api.sendMessage("The 'Cào' card game has been started.", threadID, messageID);
		}

		case "info":
		case "-i": {
			if (typeof values.player === "undefined") return api.sendMessage("No 'Cào' card game is currently available. You can create one using 'cao3la create'.", threadID, messageID);
			return api.sendMessage(
				"=== 'Cào' Card Game ===" +
				"\n- Game Host: " + values.author +
				"\n- Total Players: " + values.player.length + " players"
			, threadID, messageID);
		}

		default: {
			return global.utils.throwError(this.config.name, threadID, messageID);
		}
	}
};
