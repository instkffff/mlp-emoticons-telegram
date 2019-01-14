const Telegraf = require('telegraf')
require('dotenv').config({path:'conf.env'})
//const Query = require('jsonpath')

const bot = new Telegraf(process.env.BOT_TOKEN)

async function GetPony (query = '' , offset, limit){
	const pony = require('./pony.json')[query]
	return pony

  console.log(pony)
}



bot.on('inline_query',async({inlineQuery, answerInlineQuery}) => {
	const offset = parseInt(inlineQuery.offset) || 0
	const Ponys = await GetPony(inlineQuery.query, offset, 3)
	const results = {
		type: 'photo',
		id: Pony.slug,
		photo_url: `http://155.94.228.151:3000/${Pony.name}`,
		thumb_url: `http://155.94.228.151:3000/${Pony.name}`,
		title: Pony.name,
	}

	return answerInlineQuery(results, {next_offset: offset + 3})
})

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response);
})

bot.catch((err) => {
  console.log('Error', err)
})


bot.launch()