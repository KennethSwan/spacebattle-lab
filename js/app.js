// need an object for user
// object for alien ship
// object for game 
// attack first
// if ship survies attacks
// if user survies attack ship
// if ship survives attacks user 
// if user survives and destroys ship, option to retreat or advance 
// 


//class AlienShip = {
//	hull: function randomStats(){
//	return Math.floor(Math.random() *(6 - 3 + 1) + 3)
//}
//	}




const playerShip = {
	name: 'USS Assembly',
	hull: 20,
	firepower: 5,
	accuracy: .7
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

const game = {
	aliensArr: [],
	start(){
		const alien1 = new Alien('Alien1')
		game.aliensArr.push(alien1);
		const alien2 = new Alien('Alien2')
		game.aliensArr.push(alien2)
		const alien3 = new Alien('Alien3')
		game.aliensArr.push(alien3)
		const alien4 = new Alien('Alien4')
		game.aliensArr.push(alien4)
		const alien5 = new Alien('Alien5')
		game.aliensArr.push(alien5)
		const alien6 = new Alien('Alien6')
		game.aliensArr.push(alien6)
	},
	//battle function will choose first alien array to battle player object
	attack(){

		while(playerShip.hull > 0 && game.aliensArr[0].hull > 0){
			console.log(playerShip.name + ' attacks alien ship with 5 damage')
			game.aliensArr[0].hull -= playerShip.firepower
			if(game.aliensArr[0].hull <= 0){
				console.log('Alien ship destroyed')
			} 
			else playerShip.hull -= game.aliensArr[0].firepower
				console.log('remaining alien ship health is ',game.aliensArr[0].hull)
				console.log(game.aliensArr[0].name, ' attacks the player ship')
				console.log('remaining playerShip hull health', playerShip.hull)

		}
	}

	//player will attack log hit and value 
	//if alien survives,alien will log hit and value if alien attack is accurate
	//repeat process until either player or alien ship dies
	//if player wins battle give option to continue
		//if player chooses to continue present alien2 etc
			//if player defeats all of the aliens game is over player wins
		//if player chooses to retreat game ends
	}
game.start();
console.log(game.aliensArr)
game.attack();
console.log(game.attack)


console.log(game.aliensArr[0].firepower)
//
