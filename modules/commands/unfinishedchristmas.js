module.exports.config = {
    name: "christmaseve",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Draffodils",
    description: "🎄",
    commandCategory: "fun",
    cooldowns: 4500
};

module.exports.run = async ({ api, event }) => {
    const christmasGreetings = [
        "Wishing you a Merry Christmas filled with love and joy!",
        "May your Christmas be merry and bright!",
        "Wishing you all the happiness this festive season can bring!",
        "Have a holly, jolly Christmas!",
        "May your days be merry and bright, and may all your Christmases be white!"
    ];

    const randomIndex = Math.floor(Math.random() * christmasGreetings.length);
    const randomGreeting = christmasGreetings[randomIndex];

    api.sendMessage(randomGreeting, event.threadID);
};
