document.addEventListener('DOMContentLoaded', init, false);

function init() {
  if(!navigator.onLine) {
    console.log('offline');
    const statusElem = document.querySelector('.page-status');
    console.log(statusElem);
    statusElem.innerHTML = 'offline';
  } else {
    const statusElem = document.querySelector('.page-status');
    console.log(statusElem);
  }
}