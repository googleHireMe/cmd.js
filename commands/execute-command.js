const { dirname, basename } = require('path');
const colors = require('../tools/console-colors');
const { coloredLog } = require('../tools/tools');
const { handleOutputMessage, handleOutputError, spawnProcess } = require('../tools/tools');

module.exports = async function executeCommand(path, commandConfiguration, logColor = colors.FgCyan) {
	const  { name, command, parameters } = commandConfiguration;
	const dirName = path.split('/').pop()
	const tag = `${dirName}-${name}`;
	return new Promise((resolve, reject) => {
		coloredLog(`[${tag}]: Running ${command} ${parameters.join(' ')}`, logColor);
		const installPackagesProcess = spawnProcess(path, command, parameters);
		installPackagesProcess.stdout.on('data', data => { handleOutputMessage(data, tag); });
		installPackagesProcess.stderr.on('data', data => { handleOutputError(data, tag); });
		installPackagesProcess.once('exit', () => { resolve(); });
		installPackagesProcess.once('error', () => { reject(); });
	});
}