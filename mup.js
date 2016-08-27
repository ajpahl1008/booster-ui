module.exports = {
  servers: {
    one: {
      host: 'booster.pahlsoft.com',
      username: 'ubuntu',
      pem: '/Users/aj/Keys/mindcraft_key.pem'
    }
  },

  meteor: {
    name: 'booster',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'https://booster.pahlsoft.com'
      //MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'abernix/meteord:base',

   ssl: {
      port: 443,
      crt: '/Users/aj/Keys/booster_setup/bundle.crt',
      key: '/Users/aj/Keys/booster_setup/privkey.pem',
   },
    deployCheckWaitTime: 240,
  }, 
};
