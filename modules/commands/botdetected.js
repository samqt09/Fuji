function isBotDetected() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const bots = ["googlebot", "bingbot", "yahoo", "baiduspider", "yandexbot", "duckduckbot"];

  for (let bot of bots) {
    if (userAgent.includes(bot)) {
      return true;
    }
  }
  
  return false;
}

const botDetected = isBotDetected();

if (botDetected) {
  console.log("Bot detected.");
} else {
  console.log("No bot detected.");
}
