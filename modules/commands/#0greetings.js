module.exports.config = {
  name: 'autogreet',
  version: '1.0.2',
  hasPermission: 0,
  credits: 'ryuko/ modified Prince',
  usePrefix: false,
  description: 'Greetings and hourly message',
  commandCategory: 'system',
  usages: '',
  cooldowns: 3,
};

const greetings = [
  {
    timer: '5:00:00 AM',
    message: [`Good morning! Have a great day ahead!`],
  },
  {
    timer: '8:00:00 AM',
    message: [`Life update:\nMiss ko na sya\n-Fuji`],
  },
  {
    timer: '3:00:00 AM',
    message: [`Life update:\nNangungulila sa kanya\n-Fuji`],
  }, 
  {
    timer: '11:00:00 AM',
    message: [`Good afternoon! Take a break and stay hydrated!`],
  },
  {
    timer: '10:00:00 PM',
    message: [`what if tayo talaga?.`],
  },
];

module.exports.onLoad = (o) =>
  setInterval(() => {
    const randomMessage = (array) => array[Math.floor(Math.random() * array.length)];
    const currentHour = new Date(Date.now() + 25200000).getHours();

    const currentGreeting = greetings.find((item) => {
      const [hour] = item.timer.split(':').map(Number);
      return currentHour === hour;
    });

    if (currentGreeting) {
      global.data.allThreadID.forEach((threadID) => {
        o.api.sendMessage(randomMessage(currentGreeting.message), threadID).catch((error) => {
          console.error('Error sending message:', error);
        });
      });
    }


    if (currentHour !== 0) { 
      global.data.allThreadID.forEach((threadID) => {
        o.api.sendMessage(`𝙐𝙨𝙚 /callad 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 𝙞𝙛 𝙮𝙤𝙪 𝙚𝙣𝙘𝙤𝙪𝙣𝙩𝙚𝙧 𝙨𝙤𝙢𝙚 𝙚𝙧𝙧𝙤𝙧 𝙤𝙧 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙎𝙖𝙢 𝙍𝙖𝙢𝙤𝙨

𝙋𝙡𝙚𝙖𝙨𝙚 𝘿𝙤𝙣'𝙩 𝙛𝙤𝙧𝙜𝙚𝙩 𝙩𝙤 𝙛𝙤𝙡𝙡𝙤𝙬 ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
 https://www.facebook.com/sam.ramos.39566905?mibextid=ZbWKwL

𝙋𝙖𝙧𝙖 𝙠𝙚𝙚𝙥 𝙪𝙥𝙙𝙖𝙩𝙚𝙙 𝙠𝙖 𝙨𝙖 𝙡𝙖𝙩𝙚𝙨𝙩 𝙪𝙥𝙙𝙖𝙩𝙚𝙨 𝙣𝙞 𝙗𝙤𝙩.𝙁𝙪𝙟𝙞🤖.`, threadID).catch((error) => {
          console.error('Error sending message:', error);
        });
      });
    }
  }, 1990900); // Send every minute (60000 milliseconds = to one minute)

module.exports.run = (o) => {};