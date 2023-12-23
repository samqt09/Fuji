const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
/////////////////////////////////////////////
//========= CHECK UPTIME =========//
/////////////////////////////////////////////
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
var uptimelink = [`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`]
const Monitor = require('ping-monitor');
for (const now of uptimelink) {
  const monitor = new Monitor({
    website: `${now}`,
    title: '𝕱𝖚𝖏𝖎',
    interval: 10,
  config: {
    intervalUnits: 'seconds'
  }
});
monitor.on('up', (res) => console.log(chalk.bold.hex("#00FF00")("[ UP ] ❯ ") + chalk.hex("#00FF00")(`${res.website}`)))
monitor.on('down', (res) => console.log(chalk.bold.hex("#FF0000")("[ DOWN ] ❯ ") + chalk.hex("#FF0000")(`${res.website} ${res.statusMessage}`)))
monitor.on('stop', (website) => console.log(chalk.bold.hex("#FF0000")("[ STOP ] ❯ ") + chalk.hex("#FF0000")(`${website}`)))
monitor.on('error', (error) => console.log(chalk.bold.hex("#FF0000")("[ ERROR ] ❯ ") + chalk.hex("#FF0000")(`${error}`)))
}
/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const port = process.env.PORT || 5000
     
app.listen(port, () =>
	logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );      


logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
  
  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Starting up...");
            global.countRestart += 1;
            return;
        } else return;
    });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/RdFluux/alisha/main/README.md")
  .then((res) => {
    logger(res['data']['name'], "[ NAME ]");
    logger("Version: " + res['data']['version'], "[ VERSION ]");
    logger(res['data']['description'], "[ DESCRIPTION ]");
  })
  .catch((error) => {
    console.error(error);
  });
startBot();
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))