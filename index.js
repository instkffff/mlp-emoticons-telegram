const Telegraf = require('telegraf')
require('dotenv').config({path:'conf.env'})

const bot = new Telegraf(process.env.BOT_TOKEN)

const pony = require('./pony.json')

bot.on('inline_query', async({ inlineQuery, answerInlineQuery}) => {
  //console.log(ctx)
  //console.log(ctx.update.inline_query.query)
  const results = []
  for ( i = 0; i < inlineQuery.query; i++ ){
    var ponys = pony[i]
    results.push({
      type: 'photo',
      id: ponys.slug,
      thumb_url: 'https://m.media-amazon.com/images/M/MV5BNjk4MzkyOTQwNF5BMl5BanBnXkFtZTgwODE5MTk1MzE@._V1_SX300.jpg',
      photo_url: 'https://m.media-amazon.com/images/M/MV5BNjk4MzkyOTQwNF5BMl5BanBnXkFtZTgwODE5MTk1MzE@._V1_SX300.jpg'
      //thumb_url: `http://155.94.228.151:3000/${ponys.name}`,
      //photo_url: `http://155.94.228.151:3000/${ponys.name}`
    })  
  } 

  console.log(results)

  return answerInlineQuery(results)

})


bot.launch()
