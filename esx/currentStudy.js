// http://headers.jsontest.com/
const http = require('http');

function getData() {
  return new Promise((resolve, reject) => {
    http.get('http://headers.jsontest.com.fg/', (res) => {
      var body = "";

      res.on("data", (part) => {
        body += part;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch(e) {
          throw e;
        }
      })
    }).on("error", (error) => {
        reject(error);
      })
  })
}

async function doSomething() {
  const headers = await getData();
  return ("This is my data: \n" , headers);
}

doSomething()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error("OOps! \n", error);
  })
