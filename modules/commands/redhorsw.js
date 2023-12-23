module.exports.config = {
  name: "redhorse",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Aron",
  description:  "redhorse photo",
  commandCategory: "redhorse-IMG",
  usages: "redhorse",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/hvsjFB6.jpg"
     ];
     var callback = () => api.sendMessage({body:`redhorse with benefits 👇👇👇`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };