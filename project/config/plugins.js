module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('linn'),
        api_key: env('623415741847366'),
        api_secret: env('LwPIDZJUFm3Mfqqgvj1-wEL1Ffg'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });