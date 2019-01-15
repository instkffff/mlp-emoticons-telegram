const Telegraf = require('telegraf')
require('dotenv').config({path:'conf.env'})

const bot = new Telegraf(process.env.BOT_TOKEN)

const pony = require('./pony.json')

bot.on('inline_query', async({ inlineQuery, answerInlineQuery}) => {
  //console.log(ctx)
  //console.log(ctx.update.inline_query.query)
  const results = []
  Query = inlineQuery.query

  for ( i = 0; i < inlineQuery.query; i++ ){
    var ponys = pony[i]
    var url = `http://155.94.228.151:3000/${ponys.name}`
    results.push({
      type: 'photo',
      id: ponys.slug,
      thumb_url: url,
      photo_url: url
    })  
  } 

  console.log(pony.);

  //console.log(results)

  //return answerInlineQuery(results)

})


bot.launch()
