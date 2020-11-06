fixPrice: function(obj, event) {
    var key = event.which || event.keyCode;
    var accepted = false;
    if(key >= 48 && key <= 57 || key == 188 || key == 8 || key == 46 || key >= 37 && key <= 40) {
      accepted = true;
    }
    
    if(!accepted) {
      //Delete the last value and update the input
      var valueArray = obj.value.split('');
      var length = valueArray.length;
      valueArray[length - 1] = "";
      var updateValue = valueArray.join("");
      document.getElementById(obj.id).value = updateValue;       
    } 
    
}
