module.exports = {
  name: "rickroll",
  aliases: [],
  usage: "!rickroll",
  description: "rickrolls anyone",
  run: async (client, message, args) => {
  
  let member = message.mentions.members.first()
  if(!member) return message.channel.send("Mention someone to rickroll")
  if(member) return member.send("https://adaf.xyz THIS IS NOT A SCAM LINK I SWEAR!")
  .then(() => {
    message.member.send(`Successfully rickrolled ${member}`)
  })
  
  }
}