const Telegraf = require('telegraf')
const fetch = require('node-fetch')
require('dotenv').config({path:'conf.env'})
const pony = require('pony.json')
const query = require('jsonpath')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.launch()