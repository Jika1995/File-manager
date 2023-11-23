import readline from 'readline';
import { showDirectory } from './src/utils/showDirectory.js';
import { give } from './src/utils/giveCommand.js';
import os from 'os';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
    prompt: 'Enter > '
});

if (process.argv.length < 3) {
    console.log('This tool requires at least one argument: -- --username=...');
};

const args = process.argv.slice(2);
const username = args[1].split('=')[1];

if (args.length > 2) {
    console.log('More arguments provided than expected');
};

console.log(`Welcome to the File Manager, ${username}`);

const homeDirectory = os.homedir();
process.chdir(homeDirectory);

showDirectory();
rl.prompt()

const handleExit = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    rl.close();
    process.exit();
};

process.on('SIGINT', () => {
    handleExit()
});

rl.on('line', async (input) => {
    if (input.trim() === '.exit') {
        handleExit()
    } else {
        const [command, ...args] = input.split(' ')
        await give(command, args)
    }
});