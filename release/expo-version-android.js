const detectIndent = require('detect-indent');
const detectNewline = require('detect-newline');

module.exports.readVersion =  (contents) => JSON.parse(contents).expo.android?.versionCode || '';

module.exports.writeVersion =  (contents)=> {
  const json = JSON.parse(contents);
  const indent = detectIndent(contents).indent || 2;
  const newline = detectNewline(contents) || '\n';
  
  json.expo.android = json.expo.android || {};
  json.expo.android.versionCode += 1;
  
  return JSON.stringify(json, null, indent) + newline;
};