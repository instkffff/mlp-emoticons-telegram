const Telegraf = require('telegraf')
require('dotenv').config({path:'conf.env'})

const bot = new Telegraf(process.env.BOT_TOKEN)

const pony = require('./pony.json')

bot.on('inline_query', (ctx) => {
  //console.log(ctx)
  //console.log(ctx.update.inline_query.query)
  const results = []
  for ( i = 0; i < ctx.update.inline_query.query; i++ ){
    var ponys = pony[i]
    results.push({
      type: 'photo',
      id: ponys.slug,
      thumb_url: `http://155.94.228.151:3000/${ponys.name}`,
      photo_url: `http://155.94.228.151:3000/${ponys.name}`
    })  
  } 

  console.log(results)

  return ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, results)

})


bot.launch()
