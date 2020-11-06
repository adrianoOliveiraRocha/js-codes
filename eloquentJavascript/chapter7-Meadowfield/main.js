const VillageState = require('./modules/VillageState');

let state = new VillageState(
	"Post Office",
	[{place: "Post Office", address: "Alice's House"}]
);

//let next = first.move("Alice's House");
//console.log(next.place);
//console.log(next.parcels);
//console.log(first.place);


function runRoboot(state, robot, memory) {
	for(let turn=0;; turn++) {
		if(state.parcels.length == 0) {
			console.log(`Done in ${turn} turns`);
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

function randomPick(state) {
	let choice = Math.floor(Math.random() + array.length);
	return array[choice];
}

function randomRobot(state) {
	return {direction: randomPick(roadGraph[state.place])};
}