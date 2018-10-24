const chalk = require('chalk');
const hyperapp = require('./hyperapp-cli');

const n : number = +process.argv[2];
const argv = require('minimist')(process.argv.slice(2))['_'];
if (argv.length > 1) {
  console.log(hyperapp.commands()[argv[0]]({name: argv[1]}))
} else {
  console.log(argv);
  console.log(chalk.red('Oops!'));
  hyperapp.commands()['help']();
}
