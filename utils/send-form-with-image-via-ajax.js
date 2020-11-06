function sendFormWithImageViaAjax() {
  var variableContent = document.getElementById('variableContent');
  var myForm = document.getElementById('myForm');
  var formData = new FormData(myForm)
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      variableContent.innerHTML = 'Success';
    } else {
      variableContent.innerHTML = 'Waiting...'
    }
  }
  xhr.open('POST', myForm.getAttribute('action'), true);
  xhr.send(formData);
}
