cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/WatsonSpeechPlugin/www/watson-sdk.js",
        "id": "WatsonSpeechPlugin.WatsonSDK",
        "clobbers": [
            "window.WatsonSDK"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "WatsonSpeechPlugin": "1.0.0"
};
// BOTTOM OF METADATA
});