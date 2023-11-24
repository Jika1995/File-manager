import fs from 'fs'

export const move = async (args) => {

    fs.exists(`${args[0]}`, (exists) => {
        if (!exists) {
            console.log('Operation Failed: there is no such file');
        } else {
            const inputStream = fs.createReadStream(args[0])
            const fileName = args[0].split('/').pop()
            const fileCopyPath = `${args[1]}/${fileName}`
            const outputStream = fs.createWriteStream(fileCopyPath);

            inputStream.pipe(outputStream)

            outputStream.on('finish', () => {
                console.log(`You have successfully moved a ${args[0]}.`);
            })

            fs.rm(`${args[0]}`, { recursive: true }, (err) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                console.log('File deleted successfully');
            })

        }
    })
}

