const fs = require("fs");
module.exports.config = {
    name: "độ mixi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "dungkon", 
    description: "no prefix",
    commandCategory: "no prefix",
    usages: "Độ mixi",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("độ mixi")==0 || (event.body.indexOf("Độ mixi")==0)) {
        var msg = {
                body: "anh độ nè....",
                attachment: fs.createReadStream(__dirname + `/noprefix/domixi.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}