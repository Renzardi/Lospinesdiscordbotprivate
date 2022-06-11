const simplydjs = require('simply-djs')
const Discord = require("discord.js")
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require('discord-buttons');

module.exports = {
  name: "tateti",
  aliases: ["tate"],
  category: "🌍 Generales 🌍",
  usage: "/clc",
  description: "showing list of uptimer commands",

  run: async (client, message, args) => {

    simplydjs.tictactoe(message, {
        xEmoji: "❌", //default: ❌
        oEmoji: "⭕", //default: ⭕
        idleEmoji: "➖", //default: ➖
        embedColor: "#075FFF", //default: #075FFF
        embedFoot: "Suerte..." //default: 'Make sure to win ;)'
      });

    }
  }