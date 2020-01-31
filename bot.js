const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("672617019534999562")
setInterval(function() {
channel.send(`مرحبا بيك عامل ايه كويس تمام يارب تكون بخير بدوم اهلا بيك في اي وقت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
