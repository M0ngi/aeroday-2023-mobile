module.exports = {
    bumpFiles: [
      {
        filename: 'package.json',
      },
      {
        filename: 'app.json',
        updater: require.resolve('./release/expo-version.js'),
      },
      {
        filename: 'app.json',
        updater: require.resolve('./release/expo-version-android.js'),
      },
    ],
  };