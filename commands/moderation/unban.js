const Discord = require("discord.js");
const prefix = "+";

module.exports.run = (client, message, args) => {
if(!message.content.startsWith(prefix)) return ;
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have the permission.");
  let user = args[0];
  if (!user) return message.reply('You must supply a user id.').catch(console.error);
  message.guild.unban(user);
  if(user) return message.channel.send(`:white_check_mark: If <@${user}> was banned, he or she has now been unbanned by <@${message.member.id}>.`);
   
};

module.exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [user_id]'
}
