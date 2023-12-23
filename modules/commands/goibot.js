const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot1",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Modified by Edsel Paculanang",
  description: "goibot",
  commandCategory: "Noprefix",
  usePrefix: false,
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["wala kabang ka chat?", "naneto panay tawag sakin", "ano nanaman?", "Kape ka nalang dahil wala ka naman ka chat", "Yes? wala kabang magawa sa buhay?", "hindi kaba minahal puro ka tawag sakin", "Hello lods musta kana?", "ano ba nag jajalosi ka naman ba?", "buang panay tawag sakin", "puro ka tawag sakin 𝖺𝗇𝗈 𝗉𝖺𝗀𝗄𝖺𝗍𝖺𝗉𝗈𝗌 𝗆𝖺𝗀 𝗎𝗎𝗌𝖺𝗉 𝗍𝖺𝗒𝗈 𝗍𝖺𝗉𝗈𝗌 𝗇𝖺𝗌𝖺 𝗍𝖺𝗅𝗄𝗂𝗇𝗀 𝗌𝗍𝖺𝗀𝖾 𝗇𝖺 𝗍𝖺𝗒𝗈 𝗍𝖺𝗉𝗈𝗌 𝗆𝖺 𝖿𝖺𝗅𝗅 𝖺𝗄𝗈 𝗌𝖺𝗒𝗈 𝗍𝖺𝗉𝗈𝗌 𝗉𝖺𝗀 𝗆𝖺 𝖿𝖺𝗅𝗅 𝖺𝗄𝗈 𝖽𝗂 𝗆𝗈 𝗄𝗈 𝗌𝖺𝗌𝖺𝗅𝗎𝗁𝗂𝗇 𝗍𝖺𝗉𝗈𝗌 𝗂𝗂𝗐𝖺𝗇 𝗆𝗈 𝗄𝗈 𝗇𝗀 𝗀𝖺𝗇𝗈𝗇2 𝗇𝖺𝗅𝖺𝗇𝗀 𝗐𝖺𝗀 𝗇𝖺 𝗍𝗋𝖺𝗎𝗆𝖺 𝗇𝖺𝗄𝗈 𝖺𝗆𝖺𝖼𝖺𝗇𝖺 𝖺𝖼𝗄𝗅𝖺 😾", "ano ba kinakausap niyo lang naman ako pag no choice kayo eh 😤"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


  if ((event.body.toLowerCase() == "matutulog nako") || (event.body.toLowerCase() == "sleep nako")) {
    return api.sendMessage("goodnight sleep well mwah!", threadID);
  };

  if ((event.body.toLowerCase() == "no") || (event.body.toLowerCase() == "wag")) {
    return api.sendMessage("edi don't😠", threadID);
  };

  if ((event.body.toLowerCase() == "hatdog") || (event.body.toLowerCase() == "hotdog")) {
    return api.sendMessage("lah ang funny ni idol hahaha hatdog daw.", threadID);
  };

  if ((event.body.toLowerCase() == "sabog") || (event.body.toLowerCase() == "lutang")) {
    return api.sendMessage("kulang lang sa tulog lods", threadID);
  };

  if ((event.body.toLowerCase() == "ml") || (event.body.toLowerCase() == "Ml")) {
    return api.sendMessage("ml daw oh wag mpl", threadID);
  };

  if ((event.body.toLowerCase() == "lf kabebetime") || (event.body.toLowerCase() == "bebetime")) {
    return api.sendMessage("You have successfully registered to GO EXTEND BEBETIME, tuloy tuloy ang saya in 50 years with me", threadID);
  };

  if ((event.body.toLowerCase() == "wala lang") || (event.body.toLowerCase() == "wla lang")) {
    return api.sendMessage("edi wow", threadID);
  };

  if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "labyu")) {
    return api.sendMessage("d kita lab bahala ka manigas ka jan!", threadID);
  };

  if ((event.body.toLowerCase() == "last chat") || (event.body.toLowerCase() == "lc")) {
    return api.sendMessage("Sagip kona kapatid dahil pogi ko naman today", threadID);
  };

  if ((event.body.toLowerCase() == "hahaha") || (event.body.toLowerCase() == "HAHAHA")) {
    return api.sendMessage("️Happy Siguro to", threadID);
  };

  if ((event.body.toLowerCase() == "WHAHAHAHA") || (event.body.toLowerCase() == "hahahaha")) {
    return api.sendMessage("️ Haystt Anong Nakakatawa?", threadID);
  };

  if ((event.body.toLowerCase() == "hoy") || (event.body.toLowerCase() == "Hoy")) {
    return api.sendMessage("hoy Ikaw mahal nakita di jklang pakyu", threadID);
  };

  if ((event.body.toLowerCase() == "aw") || (event.body.toLowerCase() == "sakit")) {
    return api.sendMessage("🤸 BAT 🤸 MALUNGKOT 🤸 ANG 🤸 BESHIE 🤸 KO 🤸", threadID);
  };

  if ((event.body.toLowerCase() == "miss u") || (event.body.toLowerCase() == "i miss")) {
    return api.sendMessage("Missyoy balik kana ", threadID);
  };

  if ((event.body.toLowerCase() == "pota") || (event.body.toLowerCase() == "Pota")) {
    return api.sendMessage("hoii kupal bawal mag mura gago ayy jk HAHAHAHA", threadID);
  };

  if ((event.body.toLowerCase() == "love") || (event.body.toLowerCase() == "mahal")) {
    return api.sendMessage("Yes? ano po yun babu", threadID);
  };

  if ((event.body.toLowerCase() == "sami") || (event.body.toLowerCase() == "Sami")) {
    return api.sendMessage("ayiee hinahanap owner ko crush mo noh? 🤭", threadID);
  };

  if ((event.body.toLowerCase() == "HAHAHA") || (event.body.toLowerCase() == "hahahahahaha")) {
    return api.sendMessage("haha natawa ako sobra :)", threadID);
  };

  if ((event.body.toLowerCase() == " wow") || (event.body.toLowerCase() == "pangit")) {
    return api.sendMessage("wow pangit mo", threadID);
  };

  if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "rg")) {
    return api.sendMessage("1v1 sa kama g ka?", threadID);
  };

  if ((event.body.toLowerCase() == "ano") || (event.body.toLowerCase() == "Ano")) {
    return api.sendMessage("ano papalag kana?", threadID);
  };

  if ((event.body.toLowerCase() == "nc g") || (event.body.toLowerCase() == "ncg")) {
    return api.sendMessage("ncg kain lang ako btw bobo mo joke gutom lang to sorry nc g ulit", threadID);
  };  

  if ((event.body.toLowerCase() == "deserve") || (event.body.toLowerCase() == "kawawa")) {
    return api.sendMessage("Nangago kaba?", threadID);
  };

  if ((event.body.toLowerCase() == "eve") || (event.body.toLowerCase() == "even")) {
    return api.sendMessage("Goodevening din lods", threadID);
  };  

  if ((event.body.toLowerCase() == "bat ganyan ka?") || (event.body.toLowerCase() == "bat ka ganyan?")) {
    return api.sendMessage("ikaw kaya gumawa saken kaya wag mokong sisihin", threadID);
  };

  if ((event.body.toLowerCase() == "ang sama mo saken") || (event.body.toLowerCase() == "Fuji sama mo sakin")) {
    return api.sendMessage("talaga!! kasalanan mo yan ginawa moko ehh!! hmmp", threadID);
  };

  if ((event.body.toLowerCase() == "ang tino mo naman kausap") || (event.body.toLowerCase() == "ang tino mo kausap")) {
    return api.sendMessage("kung ayaw moko kausap edi wag maghanap ka ng iba chee!! hmmp!", threadID);
  };

  if ((event.body.toLowerCase() == "maspangit ka") || (event.body.toLowerCase() == "mas pangit ka")) {
    return api.sendMessage("️roses are red, violets and blue... when I flash the toilet I remember you", threadID);
  };

  if ((event.body.toLowerCase() == "angas") || (event.body.toLowerCase() == "agnas")) {
    return api.sendMessage("️ako lang toh mga idol", threadID);
  };

  if ((event.body.toLowerCase() == "lupet") || (event.body.toLowerCase() == "lupit")) {
    return api.sendMessage("️ ako lang toh mga idle", threadID);
  };

  if ((event.body.toLowerCase() == "nugagawen") || (event.body.toLowerCase() == "guys")) {
    return api.sendMessage("️papabillboard", threadID);
  };

  if ((event.body.toLowerCase() == "ganda mo") || (event.body.toLowerCase() == "ang ganda")) {
    return api.sendMessage("️mas maganda ka lods 🤩", threadID);
  };

  if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "angganda")) {
    return api.sendMessage("️mas maganda si kae uwu :>>", threadID);
  };

  if ((event.body.toLowerCase() == "alam ko") || (event.body.toLowerCase() == "alm ko")) {
    return api.sendMessage("️alam mo naman pala bat mo pa tinatanong? nanggagago kaba?", threadID);
  };

  if ((event.body.toLowerCase() == "ulol") || (event.body.toLowerCase() == "Ulol")) {
    return api.sendMessage("️mas ulol ka tanga HAHAHA jk", threadID);
  };

  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "sino ba owner mo?")) {
    return api.sendMessage("️si sam", threadID);
  };

  if ((event.body.toLowerCase() == "amp") || (event.body.toLowerCase() == "Amp")) {
    return api.sendMessage("️amp ka ng amp ain't my problem ibigsabihin nun", threadID);
  };

  if ((event.body.toLowerCase() == "secret") || (event.body.toLowerCase() == "Secret")) {
    return api.sendMessage("️edi wow sayo na yang secret mo hmmp!!", threadID);
  };

  if ((event.body.toLowerCase() == "goodafternoon") || (event.body.toLowerCase() == "afternoon")) {
    return api.sendMessage("️ goodafternoon🥰", threadID);
  };

  if ((event.body.toLowerCase() == "bold") || (event.body.toLowerCase() == "Bold")) {
    return api.sendMessage("️uyy wag madamot pa send🥰!", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "HAHA")) {
    return api.sendMessage("️anong nakakatawa? :>>", threadID);
  };

  if ((event.body.toLowerCase() == "inv") || (event.body.toLowerCase() == "invite")) {
    return api.sendMessage("️sana all sinasali HAHAH jk bot lang ako si developer ung tawagin nyo", threadID);
  };

  if ((event.body.toLowerCase() == "(3)") || (event.body.toLowerCase() == "3")) {
    return api.sendMessage("️4 you ayieee", threadID);
  };

  if ((event.body.toLowerCase() == "(2)") || (event.body.toLowerCase() == "(2)")) {
    return api.sendMessage("️(3)", threadID);
  };

  if ((event.body.toLowerCase() == "wala naman") || (event.body.toLowerCase() == "wla naman")) {
    return api.sendMessage("️meron tignan mo kaseng maigi", threadID);
  };

  if ((event.body.toLowerCase() == "pogi ko") || (event.body.toLowerCase() == "pogi ako")) {
    return api.sendMessage("️ano ka gold?", threadID);
  };

  if ((event.body.toLowerCase() == "pogi ako") || (event.body.toLowerCase() == "mas pogi owner ko")) {
    return api.sendMessage("️Ano ka gold?", threadID);
  };

  if ((event.body.toLowerCase() == "penge load") || (event.body.toLowerCase() == "load")) {
    return api.sendMessage("️Registered ka sa BOSURF50 Meron kang 1GB pang-Watch ng Bold, valid hanggang 2078-04-01, 11:11:11. Para sa status ng iyong promo, gamitin ang GCash o New GlobeOne, o i-text ang DATA BAL o BOSURF50 STATUS. Para sa iba pang mga detalye, i-text ang BOSURF50 INFO. I-send sa 8080.", threadID);
  };

  if ((event.body.toLowerCase() == "bobo mo naman") || (event.body.toLowerCase() == "pake ko sayo")) {
    return api.sendMessage("️edi sana pina billboard mo bulbul ko:)", threadID);
  };

  if ((event.body.toLowerCase() == "talaga") || (event.body.toLowerCase() == "talga")) {
    return api.sendMessage("️wag mo akong kausapin", threadID);
  };

  if ((event.body.toLowerCase() == "edi wag") || (event.body.toLowerCase() == "daming alam")) {
    return api.sendMessage("oo ahh", threadID);
  };

  if ((event.body.toLowerCase() == "dejk") || (event.body.toLowerCase() == "de joke")) {
    return api.sendMessage("mama mo joke", threadID);
  };

  if ((event.body.toLowerCase() == "Weird") || (event.body.toLowerCase() == "weird")) {
    return api.sendMessage("tingin ka sa salamin mas weird ung makikita mo dun", threadID);
  };

  if ((event.body.toLowerCase() == "ano bang problema mo?") || (event.body.toLowerCase() == "ano bang problema mo")) {
    return api.sendMessage("ikaw problema ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "sori") || (event.body.toLowerCase() == "sori na")) {
    return api.sendMessage("send load muna😘", threadID);
  };

  if ((event.body.toLowerCase() == "ahh") || (event.body.toLowerCase() == "ayy")) {
    return api.sendMessage("ano?", threadID);
  };

  if ((event.body.toLowerCase() == "saan?") || (event.body.toLowerCase() == "saan")) {
    return api.sendMessage("syempre edi saan pa", threadID);
  };

  if ((event.body.toLowerCase() == "Enebe") || (event.body.toLowerCase() == "Pereng tenge")) {
    return api.sendMessage("kilig ka nanaman", threadID);
  };

  if ((event.body.toLowerCase() == "Alightmotion") || (event.body.toLowerCase() == "Capcut")) {
    return api.sendMessage("Naol Editor😔", threadID);
  };

if ((event.body.toLowerCase() == "ayy geh") || (event.body.toLowerCase() == "gege")) {
    return api.sendMessage("oo ikaw na bahala", threadID);
  };

  if ((event.body.toLowerCase() == "Thank you") || (event.body.toLowerCase() == "Ty")) {
    return api.sendMessage("you're welcome idol hahha", threadID);
  };

  if ((event.body.toLowerCase() == "Zia") || (event.body.toLowerCase() == "zia")) {
    return api.sendMessage("Zia kulang sa pag-ibig", threadID);
  };

    if ((event.body.toLowerCase() == "sheesh") || (event.body.toLowerCase() == "awit")) {
    return api.sendMessage("Mag count to ten Tayong dalawa", threadID);
  };

  if ((event.body.toLowerCase() == "sent a photo.") ||  (event.body.toLowerCase() == "sent a photo")) {
    return api.sendMessage("walang siguro load to nakakalungcoat",threadID);
  };

  if ((event.body.toLowerCase() == "awts") ||  (event.body.toLowerCase() == "peyn")) {
    return api.sendMessage("oks lang yan idol nandito naman ako para sayo", threadID);
  };

if ((event.body.toLowerCase() == "ako owner mo") || (event.body.toLowerCase() == "sariling ko bot ginagago ako")) {
    return api.sendMessage("ayy sorry po master", threadID);
  };

  if ((event.body.toLowerCase() == "pa visit") || (event.body.toLowerCase() == "visit")) {
    return api.sendMessage("Oh mga lods visit niyo to at mag copylink na support tayo each other😘", threadID);
  };

  if ((event.body.toLowerCase() == "cod") || (event.body.toLowerCase() == "arat cod")) {
    return api.sendMessage("Puro ka cod mag Module kanamang kupal ka", threadID);
  };

  if ((event.body.toLowerCase() == "wehh") || (event.body.toLowerCase() == "ok")) {
    return api.sendMessage("di nga,sus choosy kapa!", threadID);
  };

  if ((event.body.toLowerCase() == "tanga") || (event.body.toLowerCase() == "bobo")) {
    return api.sendMessage("Are you gagoing me?!", threadID);
  };

  if ((event.body.toLowerCase() == "kae") || (event.body.toLowerCase() == "Kae")) {
    return api.sendMessage("bakit mo hinahanap baby ko🔥", threadID);
  };

  if (event.body.indexOf("Fuji") == 0 || (event.body.indexOf("fuji") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }