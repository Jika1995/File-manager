import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async (args) => {

    const archivedFileName = args[0].split('/').pop().split('.')[0]

    const decompressedFilePath = `${args[1]}/${archivedFileName}.txt`

    const handleStream = createReadStream(`${args[0]}`)
    handleStream
        .pipe(createGunzip())
        .pipe(createWriteStream(`${decompressedFilePath}`))
        .on('finish', () => {
            console.log('DeCompression is done');
        })
};

