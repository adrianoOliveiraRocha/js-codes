var xhr = new XMLHttpRequest();
xhr.onload = function() {
  if(this.readyState == 4 && this.status == 200) {
    searchResponse.innerHTML = this.responseText;
  } else {
    searchResponse.innerHTML = 'wait...';
  }
}

xhr.open('POST', "url.php");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("name=adriano&age=secret");
