// need an object for user
// object for alien ship
// object for game 
// attack first
// if ship survies attacks
// if user survies attack ship
// if ship survives attacks user 
// if user survives and destroys ship, option to retreat or advance 
// 
let randomHull = 0;
const userShip = {
	name: "USS Assembly",
	hull: 20,
	firepower: 5,
	accuracy: .7,	
    attack(){
		console.log("attack");
	} 

}
userShip.attack()

const alienShip = {
	hull: randomHull,
	//firepower: randomFirepower,
	//accuracy: randAccuracy,

}

const randomStats = (max, min) => {

return	Math.floor(Math.random() *(max - min+ 1)+ min)
	
}
console.log(randomStats(6, 3));








