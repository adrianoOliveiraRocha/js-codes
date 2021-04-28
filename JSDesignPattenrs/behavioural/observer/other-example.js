'strict'

class Spy {

  constructor() {
    this._partiesToNotify = [];
  }
  
  subscribe(subscriber) {
    this._partiesToNotify.push(subscriber);
  }
  
  unsubscribe(subscriber) {
    this._partiesToNotify.remove(subscriber);
  }
  
  setPainKillers(painKillers) {
    this._painKillers = painKillers;
    
    for(let i = 0; i < this._partiesToNotify.length; i++) {
      this._partiesToNotify[i](painKillers)
    }
  }
  
}

class Player {
  OnKingPainKellerChange(newPainKillerAmount) {
    console.log(newPainKillerAmount)
  }
}

let s = new Spy()
let p = new Player()
s.subscribe(p.OnKingPainKellerChange)
s.setPainKillers(12)


