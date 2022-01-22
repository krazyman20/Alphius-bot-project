module.exports = {
  name: "ping",
  aliases: [],
  usage: "!ping",
  description: "checks if bot is online",
  run: async (client, message, args) => {
  
  message.channel.send(`${client.ws.ping} ms`)
  
  
  }
}