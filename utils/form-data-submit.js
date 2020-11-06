var form = document.createElement("form");
document.body.appendChild(form);
form.method = "POST";
form.action = "login.php";
var element1 = document.createElement("INPUT");         
element1.name="un"
element1.value = un;
element1.type = 'hidden'
form.appendChild(element1);
var element2 = document.createElement("INPUT");         
element2.name="pw"
element2.value = pw;
element2.type = 'hidden'
form.appendChild(element2);
document.body.appendChild(form);
form.submit();

