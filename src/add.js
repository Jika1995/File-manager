import fs from 'fs'

export const add = async (args) => {

    fs.writeFile(`${args}`, '', (err) => {
        if (err) {
            throw `${err}`
        } else {
            console.log('File has been created successfully');
        }
    })
}

