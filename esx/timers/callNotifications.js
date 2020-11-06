function notifications() {
  console.log('This is my notification')
}

function callNotifications() {
  setInterval(() => {
    notifications()
  }, 10000)
}

setTimeout(() => {
  notifications()
  callNotifications()
}, 10)
