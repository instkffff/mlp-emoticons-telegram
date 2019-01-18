# mlp-emoticons-telegram
Emoticons copy from reddit https://www.reddit.com/r/mylittlepony/ .
Support by [telegraf.js](https://github.com/telegraf/telegraf).

### Features
1.Search results by name. (if you want fuzzy search, please do you own. )

2.Get random results if you query a word not in list(or database,something else, etc...)

### make your own
If you want to get your own bot. Please read Suggestions below.

1.You can generator the path json through the [path2json.js](https://github.com/instkffff/mlp-emoticons-telegram/blob/master/path2json.js), this will be use to query picture in your file-server.

2.Write or generator a index list for the json file you generator in first step. You'll be find specification in index.js .

3.You can hosting your picture use [path2json.js](https://github.com/zeit/serve-handler). I have gave you an example [server.js](https://github.com/instkffff/mlp-emoticons-telegram/blob/master/emotes/100x100/serve.js)

4.replace the picture url by your own, or you can rewrite the index.js in order to configuration it in [conf.env](https://github.com/instkffff/mlp-emoticons-telegram/blob/master/conf.env). You can delete the 'photo_width','photo_height' set for different images size. You also can modifier by your own though read the telegram official doc https://core.telegram.org/bots/api#answerinlinequery.

5.replace the bot token in [conf.env](https://github.com/instkffff/mlp-emoticons-telegram/blob/master/conf.env), and get it start in your own way , have fun!
