import fs from 'fs/promises'
import path from 'path'

export const add = async (args) => {

    try {
        await fs.writeFile(path.resolve(args), '', (err) => {
            if (err) {
                throw `Invalid input: ${err}`
            } else {
                console.log('File has been created successfully');
            }
        })
    } catch (error) {
        console.log('Invalid Input', error)
    }

}

