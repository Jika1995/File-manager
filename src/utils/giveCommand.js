import { cd } from "../cd.js";
import { up } from "../up.js";
import { list } from "../ls.js";
import { read } from '../cat.js';
import { add } from "../add.js";
import { rename } from "../rn.js";
import { remove } from "../rm.js";
import { copy } from "../cp.js";
import { move } from "../mv.js";
import { osOperations } from "../os.js";
import { hash } from "../hash.js";
import { compress } from '../compress.js';
import { decompress } from "../decompress.js";

export const give = async (command, args) => {
    switch (command) {
        case "up":
            up()
            break;
        case "cd":
            cd(args[0]);
            break;
        case "ls":
            list()
            break;
        case "cat":
            read(args[0]);
            break;
        case "add":
            add(args[0]);
            break;
        case "rn":
            rename(args);
            break;
        case "cp":
            copy(args);
            break;
        case "mv":
            move(args);
            break;
        case "rm":
            remove(args[0]);
            break
        case "os":
            osOperations(args);
            break;
        case "hash":
            hash(args[0]);
            break;
        case "compress":
            compress(args);
            break;
        case "decompress":
            decompress(args);
            break;
        default:
            console.log('Operation failed');
    }
}