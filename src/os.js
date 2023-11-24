import os from 'os';

export const osOperations = async (args) => {

    if (!args || args.length < 1) {
        return console.log('Arguments must be provided');
    }

    switch (args[0]) {
        case "--EOL":
            console.log(JSON.stringify(os.EOL));
            break
        case "--cpus":
            const cpuInfo = os.cpus()
            console.log(`Total CPUs: ${cpuInfo.length}`);
            cpuInfo.map((item) => (
                console.log(`model: ${item.model}; speed: ${item.speed}`)
            ))
            break
        case "--homedir":
            console.log(os.homedir());
            break
        case "--username":
            console.log(os.userInfo().username);
            break
        case "--architecture":
            console.log(process.arch);
            break
        default:
            console.log('Invalid Input');
            return
    }
}

