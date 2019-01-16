const Telegraf = require('telegraf')
require('dotenv').config({path:'conf.env'})

const bot = new Telegraf(process.env.BOT_TOKEN)

const pony = require('./pony.json')

bot.on('inline_query', async({ inlineQuery, answerInlineQuery}) => {
  //console.log(ctx)
  //console.log(ctx.update.inline_query.query)
  var list = {
  'applebloom' : 0 ,
  'applejack' : 1 ,
  'cadance': 2,
  'celestia': 3,
  'derpy': 4,
  'discord': 5,
  'fluttershy': 6,
  'luna': 7,
  'other': 8,
  'pinkie': 9,
  'rainbowdash': 10,
  'rarity': 11,
  'scootaloo': 12,
  'spike': 14,
  'starlight': 15,
  'students': 16,
  'sunset': 17,
  'sweetiebelle': 18,
  'tempest': 19,
  'trixie': 20,
  'twilight': 21,
  'yark': 22
  }

  const offset = parseInt(inlineQuery.offset) || 0 

  const results = []

  console.log(list[inlineQuery.query])

  if(inlineQuery.query.length === 0){
    Pony_id = 11
  }else if(list.hasOwnProperty(inlineQuery.query)){
    Pony_id = parseInt(list[inlineQuery.query])
  }else{
    Pony_id = 11
  }

  
  if(Pony_id === 11){
    Folder = 'rarity'
  }else{
    Folder = inlineQuery.query
  }
  
  var ponys = pony[Pony_id].children

  var num = Object.keys(ponys).length;

  for ( i = 0; i < num; i++ ){
    var Ponys = ponys[i]
    var url = `https://jpeg-tnarpxzfna.now.sh/${Folder}/${Ponys.name}`
    results.push({
      type: 'photo',
      id: Ponys.slug,
      thumb_url: url,
      photo_url: url,
      photo_width: 100,
      photo_height: 100
    })  
  } 

  return answerInlineQuery(results, { next_offset: offset + 10 })

})


bot.launch()
