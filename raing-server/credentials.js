const gaEnvKey = 'GOOGLE_APPLICATION_CREDENTIALS' // google applications key

module.exports = {
  inject: (silent = false) => {
    if (!process.env[gaEnvKey]) {
      const keyDir = `${__dirname}/key`;

      const tempKeyFileName = `${keyDir}/raing-firebase-adminsdk.json`;

      if (!silent) {
        console.log('Temp credentials file: ', tempKeyFileName);
      }
      process.env[gaEnvKey] = tempKeyFileName;
    }
  },
  gaEnvKey,
}
