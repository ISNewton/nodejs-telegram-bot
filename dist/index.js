// Dependencies
var express = require('express');
// import * as express from 'express'
// import  * as  TelegramBot  from 'node-telegram-bot-api';
var app = express();
var axios = require('axios');
var bodyParser = require('body-parser');
var port = 80;
var url = 'https://api.telegram.org/bot';
var apiToken = '6661235555:AAEFqSBJkRMLq2ZctZ123K6cdAX8u6OZusY'; // Configurations
// const bot = new TelegramBot(apiToken, {polling: true}) ;
app.use(bodyParser.json()); // Endpoints
// bot.on('message', (msg:Message) => {
//     // bot.
//   const chatId = msg.chat.id;
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });
// app.post('/', (req, res) => {
//      console.log(req.body);
//      res.send(req.body);
// });// Listening
app.listen(port, function () {
    console.log("Listening on port ".concat(port));
});
