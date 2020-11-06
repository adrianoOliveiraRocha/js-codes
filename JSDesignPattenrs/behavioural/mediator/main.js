const log = require('./../../helpers/Log.js');

function Participant(name) {
  this.name = name;
  this.chatroom = null;
}

Participant.prototype = {
  send(message, to) {
    this.chatroom.send(message, this, to);
  },

  receive(message, from) {
    log.add(from.name + " to " + this.name + ": " + message);
  }
}

function Chatroom() {
  var participants = {};

  return {
    register(participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },

    send(message, from, to) {
      if(to) {
        to.receive(message, from);
      } else {
        for(key in participants) {
          if(participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    }
    
  }
}

function run() {
  var yoko = new Participant("Yoko");
  var jonh = new Participant("Jonh");
  var paul = new Participant("Paul");
  var ringo = new Participant("Ringo");

  var chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(jonh);
  chatroom.register(paul);
  chatroom.register(ringo);

  yoko.send("All you you need is love");
  yoko.send("I love you Jonh");
  jonh.send("Hey, no need to broadcast", yoko);
  paul.send("Ha! I heard that");
  ringo.send("Paul, what do you think?", paul);
  paul.send("We gonna fuck Ringo :-(", ringo)

  log.show();
}

run();
