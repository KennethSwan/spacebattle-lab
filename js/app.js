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
	start(){
		for(let i = 0; i <= 6; i++){
		game.aliensShip.push({i});
		} 
	} 
}
game.start();
console.log(game.aliensShip);

const playerShip = {
	name: 'USS Assembly',
	hull: '20',
	firepower: '5',
	accuracy: '.7'
}

console.log(playerShip)

class Alien {
	constructor(alienName){
		this.hull = Math.floor(Math.random() *(6 - 3 + 1) + 3);
		this.firepower = Math.floor(Math.random() *(4 - 2 + 1) + 2);
		this.accuracy = Math.floor(Math.random() * (8 - 6 + 1) + 6) / 10;
		this.name = alienName
	}
}

const alien1 = new Alien('Alien1')
console.log(alien1);
const alien2 = new Alien('Alien2')
console.log(alien2)
const alien3 = new Alien('Alien3')
console.log(alien3)
const alien4 = new Alien('Alien4')
console.log(alien4)
const alien5 = new Alien('Alien5')
console.log(alien5)
const alien6 = new Alien('Alien6')
console.log(alien6)