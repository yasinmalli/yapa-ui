const shell = require('shelljs');
const chalk = require('chalk');
shell.set('-e');

const args = process.argv.slice(2);
const stage = args[0];

console.log(`using environment file: ${stage}.json`);

const envConfigFile = shell.cat(`./app/environments/${stage}.json`);
const envConfig = JSON.parse(envConfigFile);

let configFile = shell.cat('./internals/templates/config.json');

const config = JSON.parse(configFile);
config.base_url = `http://${envConfig.base_url}/index.html`;
config.api_url = `http://${envConfig.api_url}`;
configFile = JSON.stringify(config, null, '\t');

shell.ShellString(configFile).to('./build/config.json');