import { Command, flags } from '@oclif/command';
import * as inquirer from 'inquirer';

class FirstCli extends Command {
  static flags = {
    stage: flags.string({ options: ['development', 'staging', 'production'] }),
  };

  async run() {
    const { flags } = this.parse(FirstCli);

    let stage = flags.stage;

    if (!stage) {
      const responses: any = await inquirer.prompt([{
        name: 'stage',
        message: 'select a stage',
        type: 'list',
        choices: [{ name: 'development' }, { name: 'staging' }, { name: 'production' }],
      }]);

      stage = responses.stage;
    }
    this.log(`the stage is: ${stage}`);
  }
}

export = FirstCli;
