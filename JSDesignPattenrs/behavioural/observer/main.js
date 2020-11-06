function Click() {
  this.handlers = []; 
}

Click.prototype = {
  subscribe(fn) {
    this.handlers.push(fn);
  },

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(
      function(item) {
        if(item !== fn) {
          return item;
        } 
      }
    );
  },

  fire(event, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(handler => {
      handler.call(scope, event);
    });
  }

}

var log = (function() {
  var log = "";
  return {
    add: function(msg) { log += msg + "\n"; },
    show: function() { alert(log); log = ""; }
  }
})();

function run() {
  function clickHandler(event) {
    log.add("fired " + event);
  }

  var click = new Click(); //observer

  click.subscribe(clickHandler);
  click.fire('event #1');
  click.unsubscribe(clickHandler);
  click.fire('event #2');
  click.subscribe(clickHandler);
  click.fire('event #3');

  log.show();
}

run();