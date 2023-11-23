import fs from 'fs'

export const read = async (args) => {
    const readStream = fs.createReadStream(`${args}`);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

