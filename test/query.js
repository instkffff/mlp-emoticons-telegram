const pony = require('../pony.json')

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

Pony = 'twilight'

console.log(typeof(Pony))

Ponyid = list[Pony]

console.log(Ponyid)



console.log(list.hasOwnProperty(Pony))

Pony_id = parseInt(Ponyid)



ponys = pony[Pony_id].children





console.log(Object.keys(ponys).length)