import path from 'path';

export const cd = async (pathArgs) => {

    if (!pathArgs) {
        console.log('No path provided');
    }

    try {
        const normalPath = path.normalize(pathArgs);
        process.chdir(path.resolve(normalPath))
        console.log("directory has successfully been changed");

    } catch (err) {

        console.error('Invalid input', err);
    }
}

