const utility = require("../utility/utils");
const fs = require("fs");
const path = require("path");

function organizeFile(dir){
    let src = dir || process.pwd();

    let dest = path.join(src, "organised_files");

    if(fs.existsSync(dest) != true){
        fs.mkdirSync(dest);
    }

    organizer(src, dest);
}

module.exports = {
    fn: organizeFile
}

function organizer(src, dest){
    if(isFileOrDir(src) == true){
        let ext = getExtension(src);

        let category = getCategory(ext);

        sendFile(src, category, dest);
    }else{

        let childNames = getContent(src);

        for(let i=0; i<childNames.length; i++){
            let child = childNames[i];
            if(child == "organised_files"){
                continue;
            }
            let cpath = path.join(src, child);
            organizer(cpath, dest);
        }
    }
}

function isFileOrDir(src){
    return fs.lstatSync(src).isFile();
}

function getExtension(src){
    return src.split(".").pop();
}

function getContent(src){
    return fs.readdirSync(src);
}

function getCategory(ext){
    let types = utility["types"];
    for(let type in  types){
        for(let i=0; i<types[type].length; i++){
            if(ext === types[type][i]){
                return type;
            }
        }
    }

    return "others";
}

function sendFile(src, category, dest){
    let categoryPath = path.join(dest, category);

    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }

    let fName = path.basename(src);
    let copyToFile = path.join(categoryPath, fName);

    fs.copyFileSync(src, copyToFile);
}