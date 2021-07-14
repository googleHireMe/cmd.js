const process = require('process');
const childProcess = require('child_process');
const colors = require ('./console-colors');
const isWindows = process.platform === 'win32';

const handleOutputMessage = (data, tag, logColor = colors.FgCyan) => { console.log(`[${logColor}${tag}${colors.Reset}]: ${data}`); }
const handleOutputError = (data, tag, color = colors.FgYellow) => { coloredLog(`[${tag}]: ${data}`, color); }
const coloredLog = (message, color) => { color ? console.log(`${color}%s${colors.Reset}`, message) : console.log(message) };
const spawnProcess = (path, command, parameters) => childProcess.spawn(`${command}${isWindows ? '.cmd' : ''}`, parameters, { cwd: path, env: process.env });

module.exports = {
	handleOutputMessage,
	handleOutputError,
	coloredLog,
	spawnProcess
}