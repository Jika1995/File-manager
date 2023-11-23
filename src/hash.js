import fs from 'fs';
import crypto from 'crypto'

export const hash = async (args) => {

    const readStream = fs.createReadStream(`${args}`);
    const hash = crypto.createHash('sha256')

    readStream.on('data', (chunk) => {
        hash.update(chunk)
    })

    readStream.on('end', () => {
        const hex = hash.digest('hex')
        console.log(hex);
    })
}

