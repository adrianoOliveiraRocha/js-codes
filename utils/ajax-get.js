function ajax(url) {
  var mainContent = document.getElementById('mainContent');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      mainContent.innerHTML = this.responseText;
    } else {
      mainContent.innerHTML = '<div class="spinner-border"></div>';
    }
  }
  xhttp.open('GET', url, true);
  xhttp.send();
}
