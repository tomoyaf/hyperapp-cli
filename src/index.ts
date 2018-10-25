const chalk = require('chalk');
const hyperapp = require('./hyperapp-cli');

const n : number = +process.argv[2];
const argv = require('minimist')(process.argv.slice(2))['_'];

if (argv[0] === undefined) {
  hyperapp.commands()['help'](argv);
} else {
  hyperapp.commands()[argv[0]](argv);
}
