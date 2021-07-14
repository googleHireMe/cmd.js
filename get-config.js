const fs = require('fs');
const colors = require ('./tools/console-colors');
const { coloredLog } = require('./tools/tools');

module.exports = function getConfig() {
	const isUserConfigExists = fs.existsSync('./config/config.json');
	if (isUserConfigExists) {
		const config = require('./config/config.json');
		return config;
	}
	const errorMessage = 'Please put config.json file with your settings in this folder. You can use config-example.json as an example of required format';
	coloredLog(errorMessage, colors.FgRed);
	throw new Error(errorMessage);
}