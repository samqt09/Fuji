module.exports.config = {
    name: "mixtea",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Tea maestro",
    description: "Participate in a word challenge game with mix tea",
    commandCategory: "Fun",
    cooldowns: 10,
};

// Store game settings
const gameSettings = {
    pts: 30,
    time: 5,
    syll: 700
};

// Store player points
const playerPoints = {};

module.exports.run = ({ api, event }) => {
    const { threadID, senderID } = event;

    // Display game instructions and start countdown
    api.sendMessage(`To participate, react on 💬 with ❗ to join the game.
**Goal**: Be the fastest to write a word containing the group of 3 letters indicated.
You can't reuse a word already played.

Settings during this cooldown:
**,pts** ${gameSettings.pts} to redefine the number of points to reach (between 5 and 1000. Current: 30)
**,time** ${gameSettings.time} to redefine the minimum response time, in seconds (between 3 and 50. Current: 10)
**,syll** ${gameSettings.syll} to redefine the number of possible groups of 3 letters (between 10 and 9000. Lowest values are easier. Current: 1400)

If you are a server mod, you can set these values for all the future games with ,greenteapts, ,greenteatime, ,teasyll

You can stop the game for everyone with ,exitgame`, threadID);
    
    // Start countdown after 7 seconds
    setTimeout(() => {
        const randomLetters = generateRandomLetters();
        api.sendMessage(`💬 The game is starting now! Quickly type a word containing: ${randomLetters}\n\nYou can answer that one time in 5 seconds`, threadID);
        
        // Deduct a player's point if they don't answer in 5 seconds
        setTimeout(() => {
            if (!playerPoints[senderID]) {
                playerPoints[senderID] = 0;
            }
            if (playerPoints[senderID] > 0) {
                playerPoints[senderID]--;
                api.sendMessage(`⚠️ You didn't answer in time and lost 1 point. Total points: ${playerPoints[senderID]}`, threadID);
            }
        }, 5000);
    }, 7000);
};

// Message event handler
module.exports.event = async ({ api, event }) => {
    const { body, senderID, threadID } = event;
    
    // Check if the message contains a valid answer
    if (body && body.length >= 10 && /^[A-Za-z]+$/.test(body)) {
        const randomLetters = generateRandomLetters();
        const containsRandomLetters = containsLetters(body.toUpperCase(), randomLetters);
        
        if (containsRandomLetters) {
            // Calculate and update player points
            if (!playerPoints[senderID]) {
                playerPoints[senderID] = 0;
            }
            playerPoints[senderID] += 5;
            const totalPoints = playerPoints[senderID];
            
            // Display the points won and start a new round
            api.sendMessage(`:medal: <@${senderID}> won 5 points. Total: **${totalPoints}**`, threadID);
            api.sendMessage(`💬 Great job! The next challenge is: ${randomLetters}\n\nYou can answer that one time in 5 seconds`, threadID);
            
            // Check if player reached maximum points
            if (totalPoints >= gameSettings.pts) {
                api.sendMessage(`Congratulations! You've reached the maximum points of ${gameSettings.pts}.`, threadID);
                // Implement any additional logic for ending the game here
            }
        } else {
            // Incorrect answer handling
            api.sendMessage(`❌ Incorrect answer. Try again!`, threadID);
        }
    }
};

// Function to generate a random set of 3 letters
function generateRandomLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomLetters = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomLetters += letters.charAt(randomIndex);
    }
    return randomLetters;
}

// Function to check if a word contains certain letters in any order
function containsLetters(word, letters) {
    for (const letter of letters) {
        if (!word.includes(letter)) {
            return false;
        }
        word = word.replace(letter, ''); // Remove the used letter from the word
    }
    return true;
}
