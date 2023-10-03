// Dependencies
// const express = require('express');
import express from "express";
import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const port = 80;
const url = "https://api.telegram.org/bot";
const apiToken = "6661235555:AAEFqSBJkRMLq2ZctZ123K6cdAX8u6OZusY"; // Configurations

const bot = new TelegramBot(apiToken, { polling: true });

// app.use(bodyParser.json());// Endpoints

const optKeyboard = {
  reply_markup: {
      keyboard: [
        [ {
            text: "help",
          }],
        [{
            text: "about"
          }]
      ]}
  }

const optRemove = {
  reply_markup: {
     remove_keyboard: true
  }
};

bot.onText(/\/start/, (msg: TelegramBot.Message) => {
  console.log(msg);
  const chatId = msg.chat.id;

  // bot.sendMessage(chatId ,'choose' ,options);
    bot.sendMessage(chatId ,'select please' ,optKeyboard);
});

bot.on('message', (msg) => {
  if (msg.text.toString().toLowerCase() === 'help') {
    bot.sendMessage(msg.chat.id,"This is a message that shows help and removes keyboard", optRemove);
  } else if (msg.text.toString().toLowerCase() === 'about') {
    bot.sendMessage(msg.chat.id, "The creator of the bot is ME, and remove keyboard", optRemove);
  } 
  else{

  }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
