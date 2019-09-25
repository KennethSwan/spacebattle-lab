// need an object for user
// object for alien ship
// object for game 
// attack first
// if ship survies attacks
// if user survies attack ship
// if ship survives attacks user 
// if user survives and destroys ship, option to retreat or advance 
// 
const randomStats = (max, min) => {
	return Math.floor(Math.random() *(max - min + 1) + min)
}
console.log(randomStats(6,3));
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

//class AlienShip = {
//	hull: function randomStats(){
//	return Math.floor(Math.random() *(6 - 3 + 1) + 3)
//}
//	}

const game = {
	aliensShip: [],
	start(num){
		for(let i = 0; i <= 6; i++){
		  game.aliensShip.push[i]
		} 
	} 
}
game.start(1)
game.start(2)
game.start(3)
game.start(4)
console.log(game.aliensShip);







