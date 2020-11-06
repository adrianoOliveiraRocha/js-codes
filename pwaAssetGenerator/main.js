const pwaAssetGenerator = require('pwa-asset-generator');
const { thisExpression } = require('@babel/types');

async function makeImages() {
  const { savedImages, htmlMeta, manifestJesonContent } = await pwaAssetGenerator.generateImages(
    'https://webdelivery.app.br/core/images/system-images/logo.png',
    './images',
    {
      scrape: false,
      background: "linear-gradient(to right, #23ad43 0%, #254889 100%)",
      splashOnly: false,
      portraitOnly: false,
      log: false,
      opaque: false,
      type: "png"
    }
  );

  const data = { savedImages, htmlMeta };
  return data;
}

makeImages()
  .then(data => {

    const fs = require('fs');
    
    var jsonInfos = fs.readFileSync('./docs/jsonInfos.json');
    jsonInfos = JSON.parse(jsonInfos);
    jsonInfos.savedImages = data.savedImages;
    jsonInfos = JSON.stringify(jsonInfos);

    fs.writeFileSync('./docs/jsonInfos.json', jsonInfos);

    var htmlInfos = fs.readFileSync('./docs/htmlInfos.json');
    htmlInfos = JSON.parse(htmlInfos);
    htmlInfos.htmlMeta = data.htmlMeta;
    htmlInfos = JSON.stringify(htmlInfos);

    fs.writeFileSync('./docs/htmlInfos.json', htmlInfos);

  })
  .catch(error => {
    console.error(error);
  })



