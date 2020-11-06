const roads = require('./../data/roads');
const buildGraph = require('./../modules/buildGraph');
const roadGraph = buildGraph(roads);

class VillageState {
	
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}
	
	move(destination) {
		if(!roadGraph[this.place].includes(destination)) {
			/* the robot will keep in the current local because this address isn't valid */
			return this;  
		} else {
			/* the new state will be created because the robot moved on  */
			let parcels = this.parcels.map(p => {
				if(p.place != this.place) return p; // the first one that is different
				return {place: destination, address: p.address};
			}).filter(p => p.place != p.address);
			return new VillageState(destination, parcels);
		}
	}
	
}

module.exports = VillageState;