import fs from 'fs'

export const remove = async (args) => {

    fs.exists(`${args}`, (exists) => {
        if (!exists) {
            console.error('Operation failed: no such file')
        } else {
            fs.rm(`${args}`, { recursive: true }, (err) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                console.log('File deleted successfully');
            })
        }
    })
};

