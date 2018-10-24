const clone = (name: string) => {
  const git = require('simple-git/promise');
  const chalk = require('chalk');
  const exec = require('child_process').exec;
  const remote = `https://github.com/tomoyaf/hyperapp-boilerplate.git`;

  console.log(chalk.green('git clone' + " " + remote + " ./" + name));
  git().silent(true)
  .clone(remote, name)
  .then(() => {
    console.log('finished');
    console.log(chalk.green('cd ./' + name + ' && yarn && yarn new && git init'));
    exec('cd ./' + name + " && yarn && yarn new && git init", (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.log(err);
    }
    console.log(stdout);
  });})
  .catch((err: any) => console.error('failed: ', err));
};

module.exports = {
  commands() {
    interface newInterface {
      name: string;
    };
    return {
      new({ name }: newInterface): boolean {
        console.log(name);
        clone(name);
        return name === undefined;
      },
      help() {
        console.log('help me');
      }
    }
  }
}
