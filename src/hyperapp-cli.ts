interface execInterface {
  command: string;
  options?: string[];
  next?: execInterface;
};
const exec = (spawn:any, command: string, options: string[] | undefined, next: execInterface | undefined) => {
  const chalk = require('chalk');
  console.log(chalk.green(
    command + (options !== undefined ? (' ' +  options.join(' ')): '')
  ));
  const commandProcess = spawn(command, options, { shell: true});
  commandProcess.stdout.on('data', (data: any) => {
    process.stdout.write(data.toString());
  });
  commandProcess.stderr.on('data', (data: any) => {
    process.stdout.write(data.toString());
  });
  commandProcess.on('close', (code: any) => {
    if (code == 0 && next !== undefined){
      exec(spawn, next.command, next.options, next.next);
    }
  });
}

module.exports = {
  commands() {
    const chalk = require('chalk');
    const path = require('path');

    return {
      new(argv: any): boolean {
        const name = argv[1] === undefined ? 'app' : argv[1];
        console.log(chalk.bold('App Name : ' + name));

        const remote = `https://github.com/tomoyaf/hyperapp-boilerplate.git`;
        const spawn = require('child_process').spawn;
        exec(spawn, 'git', ['clone', remote, './' + name], {
          command: 'cd', options: ['./' + name, '&&', 'yarn', '&&', 'yarn', 'new', '&&', 'git', 'init']
        });
        return name === undefined;
      },
      help(argv: any) {
        console.log('Usage:')
        console.log('  hyperapp-cli new APP_NAME');
      }
    }
  }
}
