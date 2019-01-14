const Telegraf = require('telegraf')
const fetch = require('node-fetch')
require('dotenv').config({path:'conf.env'})
const pony = require('./pony.json')
//const Query = require('jsonpath')

const bot = new Telegraf(process.env.BOT_TOKEN)

async function GetPony (query = '' , offset, limit){
	const { ponys } = await pony.json()
	return ponys
}

bot.on('inline_query',async({inlineQuery, answerInlineQuery}) => {
	const offset = parseInt(inlineQuery.offset) || 0
	const Ponys = await GetPony(inlineQuery.query, offset, 30)
	const results = Ponys.map((Pony)=>({
		type: 'photo',
		id: Pony.slug,
		photo_url: './emotes/JPEG/`${Pony.name}`',
		thumb_url: './emotes/JPEG/`${Pony.name}`',
		title: Pony.name,
	}))

	return answerInlineQuery(results, {next_offset: offset + 30})
})



bot.launch()