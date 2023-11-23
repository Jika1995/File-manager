import fs from 'fs'

export const list = async () => {
    const files = await fs.readdir(`${process.cwd()}`, { withFileTypes: true })

    const changedFiles = files.map((file) => ({
        Name: file.name,
        Type: file.isDirectory() ? 'folder' : 'file'
    }))

    console.table(changedFiles)
}
