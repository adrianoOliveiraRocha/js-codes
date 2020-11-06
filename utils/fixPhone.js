function fixPhone(phone) {
  phone = phone.replace('(', '').replace(')','');
  if(phone.length == 2) {
    document.getElementById('phone').value = '(' + phone + ')';
  }
}