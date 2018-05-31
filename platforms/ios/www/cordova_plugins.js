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
  "cordova-plugin-whitelist": "1.3.3",
  "WatsonSpeechPlugin": "1.0.0"
};
// BOTTOM OF METADATA
});