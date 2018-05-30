cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "WatsonSpeechPlugin.WatsonSDK",
    "file": "plugins/WatsonSpeechPlugin/www/watson-sdk.js",
    "pluginId": "WatsonSpeechPlugin",
    "clobbers": [
      "window.WatsonSDK"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "WatsonSpeechPlugin": "1.0.0",
  "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});