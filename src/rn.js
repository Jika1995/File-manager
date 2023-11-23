import fs from 'fs'

export const rename = async (args) => {

    const path = args[0].split('/').slice(0, -1).join('/')

    fs.exists(`${path}/${args[1]}`, (exists) => {
        if (exists) {
            console.error('Operation failed: already exists');
        } else {
            fs.exists(`${args[0]}`, (exists) => {
                if (!exists) {
                    console.error('Operation failed')
                } else {
                    fs.rename(`${args[0]}`, `${path}/${args[1]}`, () => {
                        console.log("\nFile Renamed!\n");
                    })
                }
            })
        }
    })

};

