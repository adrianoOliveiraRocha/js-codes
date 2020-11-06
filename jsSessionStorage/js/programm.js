Core = {

  insertProduct: function(productId){
    sessionStorage.setItem('item_' + productId, productId);
    this.verify();
  },
  
  cleanSession: function(){
    sessionStorage.clear();
    this.verify();
    location.href = 'index.html';
  },  
  
  verify: function() {
    var insertedIds = Object.values(sessionStorage);    
    if(insertedIds.length > 0) {
      insertedIds.forEach(id => {        
        var btnId = 'btn_' + id;
        var btn = document.getElementById(btnId);
        btn.innerHTML="Delete";
        
      });
    } else {
      console.log('let the buttons in its places');
    }
  }
  
}
