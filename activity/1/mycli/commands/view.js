const fs = require("fs");
const path = require("path");

// src -> /Users/abhaychauhan/Desktop/Languages/JavaScript/mycli | mode -> flat
function viewHelper(src, mode){
    if(mode == "flat"){
        console.log("tree view will be shown for this", path.basename(src))
        viewAsFlatFile(src, path.basename(src)); // src | mycli
    }else if(mode == "tree"){
        console.log("tree view will be shown for this", src)
        viewAsTree(src, "");
    }else{
        console.log("wrong mode type help for commands");
    }
}

module.exports = {
    fn: viewHelper
}

function viewAsTree(src, indent){
    if(isSrcFile(src) == true){
        console.log(indent, path.basename(src), "*");
    }else{
        console.log(indent, path.basename(src));

        let childNames = getContent(src);

        for(let i=0; i<childNames.length; i++){
            let child = childNames[i];
            let cpath = path.join(src, child);

            viewAsTree(cpath, indent + "\t");
        }
    }
}

function viewAsFlatFile(src, toPrint){
    if(isSrcFile(src) == true){
        console.log(toPrint + "*");
    }else{
        console.log(toPrint);

        let childNames = getContent(src);

        for(let i=0; i<childNames.length; i++){
            let child = childNames[i];
            let cpath = path.join(src, child);
            let pathToPrint = path.join(toPrint, child);
            viewAsFlatFile(cpath, pathToPrint);
        }
    }
}

function isSrcFile(src){
    return fs.lstatSync(src).isFile();
}

function getContent(src){
    return fs.readdirSync(src);
}