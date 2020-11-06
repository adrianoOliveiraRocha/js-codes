(async () => {
  const { savedImages, htmlMeta, manifestJesonContent } = await pwaAssetGenerator.generateImages(
    'https://webdelivery.app.br/core/images/system-images/logo.png',
    './images',
    {
      scrape: false,
      background: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
      splashOnly: false,
      portraitOnly: false,
      log: false,
      opaque: false,
      type: "png"
    }
  );
  
})();

const appleDeviceSpecsForLaunchImages = pwaAssetGenerator.appleDeviceSpecsForLaunchImages;