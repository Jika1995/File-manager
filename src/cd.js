export const cd = async (pathArgs) => {
    try {
        process.chdir(`/${pathArgs}`)
        console.log("directory has successfully been changed");

    } catch (err) {

        console.error('Invalid input', err);
    }
}

