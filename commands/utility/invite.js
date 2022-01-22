module.exports = {
  name: "invite",
  aliases: [],
  usage: "!invite",
  description: "invites the bot to your server",
  run: async (client, message, args) => {
  
  message.member.send("Want to invite me? here is the link: https://discord.com/api/oauth2/authorize?client_id=932587973147521024&permissions=8&scope=bot%20applications.commands")
  
  
  }
}