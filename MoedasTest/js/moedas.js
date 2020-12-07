/*
APIs gratuitas: https://docs.awesomeapi.com.br/
*/
function all() {
  return new Promise((resolve, reject) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then(response => response.json())
      .then(data => {
        const result = {
          titulo: "Todas as Moedas",
          data 
        }
        resolve(result);
      }).catch(error => {
        reject(error);
      })
  })
}

function allSelected() {
  return new Promise((resolve, reject) => {
    fetch('https://economia.awesomeapi.com.br/all/USD-BRL')
      .then(response => response.json())
      .then(data => {
        const result = {
          titulo: "Moedas Selecionadas",
          data 
        };

        resolve(result);

      }).catch(error => {
        reject(error);
      })
  })
}


Promise.all([all(), allSelected()])
  .then((geneeralResult) => {
    geneeralResult.forEach(result => {
      console.log(result.titulo);
      console.log(result.data);
      console.log("\n");
    })
  })
  .catch(error => {
    console.error(error);
  })


