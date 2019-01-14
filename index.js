const Telegraf = require('telegraf')
require('dotenv').config({path:'conf.env'})

const bot = new Telegraf(process.env.BOT_TOKEN)

const pony = require('./pony.json')

bot.on('inline_query', (ctx) => {
  //console.log(ctx)
  //console.log(ctx.update.inline_query.query)
  const PonyJson = []
  for ( i = 0; i < ctx.update.inline_query.query; i++ ){
    var ponys = pony[i]
    PonyJson.push({
      type: 'photo',
      id: ponys.slug,
      photo_url: `http://155.94.228.151:3000/${ponys.name}`,
      thumb_url: `http://155.94.228.151:3000/${ponys.name}`
    })  
  } 

  console.log(PonyJson)

  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, PonyJson)

})


bot.launch()
