import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async (args) => {

    const fileName = args[0].split('/').pop().split('.')[0]

    const archivedFilePath = `${args[1]}/${fileName}.gz`

    const handleStream = createReadStream(`${args}`)
    handleStream
        .pipe(createGzip())
        .pipe(createWriteStream(`${archivedFilePath}`))
        .on('finish', () => {
            console.log('Compression is done');
        })
}

