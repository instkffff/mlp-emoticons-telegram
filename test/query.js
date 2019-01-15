const pony = require('../pony.json')

var list = {
	applebloom : 0 ,
	applejack : 1 ,
	cadance: 2,
	celestia: 3,
	derpy: 4,
	discord: 5,
	fluttershy: 6,
	luna: 7,
	other: 8,
	pinkie: 9,
	rainbowdash: 10,
	rarity: 11,
	scootaloo: 12,
	spike: 13,
	starlight: 14,
	students: 15,
	sunset: 16,
	sweetiebelle: 17,
	tempest: 18,
	trixie: 19,
	twilight: 20,
	yark: 21
}

const Query = 'twilight'

if(Query === 'rarity'){
	console.log(Query)
}else{
	Pony_id = list.Query
}



var ponys = pony[Pony_id].children





console.log(Object.keys(ponys).length)