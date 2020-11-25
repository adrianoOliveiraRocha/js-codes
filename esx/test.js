// http://headers.jsontest.com
const http = require('http');

function getData() {
  return new Promise((resolve, reject) => {

    http.get('http://headers.jsontest.com', (res) => {
      var body = "";

      res.on("data", (part) => {
        body += part;
      })

      res.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch(e) {
          throw e;
        }
      })
    }).on("error", (error) => {
      reject(error);
    });

  });
}

async function doSothing() {
  const result = await getData();
  // do something
  var response = `This is my data: ${JSON.stringify(result)}`;
  return response;
}

doSothing()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
