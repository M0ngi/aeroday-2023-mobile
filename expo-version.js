const detectIndent = require('detect-indent');
const detectNewline = require('detect-newline');

module.exports.readVersion =  (contents) => JSON.parse(contents).expo.version || '';

module.exports.writeVersion =  (contents, version)=> {
  const json = JSON.parse(contents);
  const indent = detectIndent(contents).indent || 2;
  const newline = detectNewline(contents) || '\n';
  
  json.expo.version = version;
  
  return JSON.stringify(json, null, indent) + newline;
};