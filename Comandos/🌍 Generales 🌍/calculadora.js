const simplydjs = require('simply-djs')
const Discord = require("discord.js")
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require('discord-buttons');

module.exports = {
  name: "calculadora",
  aliases: ["clc"],
  category: "🌍 Generales 🌍",
  usage: "/clc",
  description: "showing list of uptimer commands",

  run: async (client, message, args) => {

    simplydjs.calculator(message, {
        embedColor: "hex code"
      });

    }
  }