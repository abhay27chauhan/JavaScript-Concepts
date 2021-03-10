const fs = require('fs');

function updatefn(fileNames, flag){
    const fname = fileNames[0];
    if(fs.existsSync(fname) === false){
        console.log(`file named ${fname} does not exist`);
        return;
    }
    if(flag == '-s'){
        
    }else if(flag == '-n'){
        // read file
        const dataArr = fs.readFileSync(fname, {encoding:'utf8', flag:'r'}).toString().split("\n");

        // delete file
        fs.unlinkSync(fname);

        // write to file -> adds numbering to even empty lines
        for(let i=0; i<dataArr.length; i++){
            let dataToWrite = dataArr[i].trim() + "\n"
            if(i == dataArr.length-1){
               dataToWrite = dataArr[i].trim()
            }
            fs.writeFileSync(fname, (i+1) + " " + dataToWrite, {encoding: "utf8", flag: "a+", mode: 0o666});
        }
        console.log(fs.readFileSync(fname, "utf8")); 
        
    }else if(flag == '-b'){
        // read file
        const dataArr = fs.readFileSync(fname, {encoding:'utf8', flag:'r'}).toString().split("\n");

        // filtering out non-empty lines
        const newDataArr = dataArr.filter(str => str.trim() !== '');

        // delete file
        fs.unlinkSync(fname);

        // create and write to file
        for(let i=0; i<newDataArr.length; i++){
            let dataToWrite = newDataArr[i].trim() + "\n"
            if(i == newDataArr.length-1){
               dataToWrite = newDataArr[i].trim()
            }
            fs.writeFileSync(fname, (i+1) + " " + dataToWrite, {encoding: "utf8", flag: "a+", mode: 0o666});
        }
        console.log(fs.readFileSync(fname, "utf8"));
    }else{
        console.log('wrong command');
    }
}

module.exports = {
    fn: updatefn
}