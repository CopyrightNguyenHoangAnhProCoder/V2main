module.exports.config = {
	name: "cosplay",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảnh gái",
	commandCategory: "Hình Ảnh",
	usages: "cosplay",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.vangbanlanhat.tk/image?type=cosplay').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh gái 🥳🥳`,
						attachment: fs.createReadStream(__dirname + `/cache/gainhat.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gainhat.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gainhat.${ext}`)).on("close", callback);
			})
}