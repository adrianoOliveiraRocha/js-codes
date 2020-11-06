const log = require('./../../helpers/Log');

function GeoCoder() {
  this.getLaLng = function(address) {
    if(address === "Amsterdam") {
      return "52.3700° N, 4.8900° E";
    } else if(address === "London") {
      return "51.5171° N, 0.1062° W";
    } else if(address === "Paris") {
      return "48.8742° N, 2.3470° E";
    } else if(address === "Berlim") {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  }
}

function GeoProxy() {
  var geocoder = new GeoCoder();
  var geocache = {};

  return {

    getLaLng(address) {
      if(!geocache[address]) {
        geocache[address] = geocoder.getLaLng(address);
      }
      log.add(address + ": " + geocache[address]);      
    },

    getCount() {
      var count = 0;
      for(var code in geocache) { count++ };
      return count;
    }

   };

};

function run() {
  var geo = new GeoProxy();
  
  geo.getLaLng("Paris");
  geo.getLaLng("London");
  geo.getLaLng("London");
  geo.getLaLng("London");
  geo.getLaLng("London");
  geo.getLaLng("Amsterdam");
  geo.getLaLng("Amsterdam");
  geo.getLaLng("Amsterdam");
  geo.getLaLng("Amsterdam");
  geo.getLaLng("London");
  geo.getLaLng("London");

  log.add("\nCache size: " + geo.getCount());
  log.show();

}

run();

