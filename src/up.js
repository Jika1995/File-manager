export const up = async () => {
    try {
        process.chdir('..')
        console.log("directory has successfully been changed");

    } catch (err) {

        console.error("error while changing directory");
    }

}
