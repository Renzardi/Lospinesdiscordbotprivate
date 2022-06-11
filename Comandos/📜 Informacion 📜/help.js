const simplydjs = require('simply-djs')
const Discord = require("discord.js")
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require('discord-buttons');

module.exports = {
  name: "help",
  aliases: ["hlp"],
  category: "📜 Informacion 📜",
  usage: "/help",
  description: "showing list of uptimer commands",

  run: async (client, message, args) => {

    let b1 = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("¡Invitame!")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=969391377022615552&permissions=8&scope=bot")

    let b2 = new disbut.MessageButton()
    .setStyle("url")
    .setLabel("¡Soporte!")
    .setURL("https://discord.gg/fuQ8Ccjd9C")

    let botones = new disbut.MessageActionRow()
    .addComponent(b1, b2)

    let invitar = await message.channel.send("¡Hey!, ¡Invitame a tu servidor!. ¡Es facil solo clickea el boton y selecciona el servidor en el que quieres que este!", b1)

    let soporte = await message.channel.send("¡Hey!, Recorda que mi prefix es: /\n\n¡Unite a nuestro servidor ante cualquier duda!!", b2)

    let embed1 = new Discord.MessageEmbed()
      .setTitle('**📋LOS PIBES | 2.0**')
      .setDescription(' **📈 *Resumen:*  ¡Este bot cumple con multiples funciones que podran ayudarte en tu servidor, contiene muchas categorias divertidas y utiles para usar en comandos basicos!**')
      .addField("📋 PREFIX","**`/`**\n\n📋 CATEGORIAS ACTUALES:\n\n")
        .addField("**🌍 Generales 🌍**", "**`Comandos sin categoria definida`**")
.addField("🎵 Musica🎵", "**`Sistema de Musica`**")
.addField("👑 Owner 👑", "**`Sistema de Owner`**")
.addField("📜 Informacion 📜", "**`Sistema de Informacion con APIS`**")
.addField("😎 LosPibes 😎", "**`Categoria del servidor del Bot`** **NO DISPONIBLE**")
.addField("🛡️ Administracion 🛡️", "**`Sistema de Administracion`**")
      .setColor('RANDOM')
      .setImage('https://media.discordapp.net/attachments/907859069417705491/922382783228309534/standard-1.gif')
      .setFooter("Los Pibes | 2.0")
    
        let embed4 = new Discord.MessageEmbed()
      .setTitle('**🌍 Generales 🌍**')
      .setDescription(' **📈 *RECUERDA QUE:*  EL PREFIX ES /**')
      .addField(
        "📋 COMANDOS",
        "`avatar` `emoji-id`")
      
      .setColor('RANDOM')
      .setImage('https://media.discordapp.net/attachments/907859069417705491/922382783228309534/standard-1.gif')
      .setFooter('Los Pibes | 2.0')
    
    let embed3 = new Discord.MessageEmbed()
      .setTitle('**🎵 Musica🎵**')
      .setDescription('**📈 *RECUERDA QUE:*  EL PREFIX ES /**')
      .addField(
        "📋 COMANDOS",
        "`autoplay` `filter` `forward` `loop` `nowplaying` `pause` `play` `queue` `resume` `rewind` `search` `seek` `shuffle` `skip` `stop` `volume`")
      
      .setColor('RANDOM')
      .setImage('https://media.discordapp.net/attachments/907859069417705491/922382783228309534/standard-1.gif')
      .setFooter('Los Pibes | 2.0')
    
        let embed5 = new Discord.MessageEmbed()
      .setTitle('**👑 Owner 👑**')
      .setDescription('**📈 *RECUERDA QUE:*  EL PREFIX ES /**')
      .addField(
        "📋 COMANDOS",
        "`cambiar-avatar` `servidor-del-bot`")
        .setColor('RANDOM')
        .setImage('https://media.discordapp.net/attachments/907859069417705491/922382783228309534/standard-1.gif')
        .setFooter('Los Pibes | 2.0')

        let embed6 = new Discord.MessageEmbed()
        .setTitle('**📜 Informacion 📜**')
        .setDescription('**📈 *RECUERDA QUE:*  EL PREFIX ES /**')
        .addField(
          "📋 COMANDOS",
          "`coronavirus-datos` `datos-servidor` `datos-usuario` `dev` `help` `invitar-bot` `juego-steam` `ping` `uptime`")
    .setColor('RANDOM')
      .setImage('https://media.discordapp.net/attachments/907859069417705491/922382783228309534/standard-1.gif')
      .setFooter('Los Pibes | 2.0')


      let embed7 = new Discord.MessageEmbed()
      .setTitle('**🛡️ Administracion 🛡️**')
      .setDescription('**📈 *RECUERDA QUE:*  EL PREFIX ES /**')
      .addField(
        "📋 COMANDOS",
        "`ban` `clear` `kick` `say`")
  .setColor('RANDOM')
    .setImage('https://media.discordapp.net/attachments/907859069417705491/922382783228309534/standard-1.gif')
    .setFooter('Los Pibes | 2.0')
   

      

    
    let pages = [embed1, embed4, embed3, embed5, embed6, embed7] // REQUIRED

    // its still possible without embed
    // let pages = ['page1', 'page2', 'page3']

    simplydjs.embedPages(client, message, pages, {
      firstEmoji: '892078876983971840', 
      // default: ⏪
      backEmoji: '892078940246638662', // default: ◀️
      delEmoji: '891458936656515092', // default: 🗑️
      forwardEmoji: '892048181242761227', 
      // default: ▶️
      lastEmoji: '892078890279907339', 
      // default: ⏩

      btncolor: 'grey', // default: green 
      delcolor: 'red', // default: red
      skipcolor: 'grey', // default: blurple
      // Colors that discord-buttons support. like red, blurple, grey, green

      skipBtn: true,
    })
  }
}
