import fs from 'fs';
import path from 'path'

export const copy = async (args) => {

    const inputStream = fs.createReadStream(path.resolve(args[0]))
    const fileName = args[0].split('/').pop().split('.')[0]
    const fileCopyPath = `${args[1]}/${fileName}-copy`
    const outputStream = fs.createWriteStream(path.resolve(fileCopyPath));

    // console.log(fileName, fileCopyPath);

    inputStream.pipe(outputStream)

    outputStream.on('finish', () => {
        console.log(`You have successfully created a ${args[0]} copy. The new file name is ${fileCopyPath}.`);
    })
}

