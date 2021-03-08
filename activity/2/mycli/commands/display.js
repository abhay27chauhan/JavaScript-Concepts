const fs =  require('fs');

function displayfn(fileNames){
    for(let fname of fileNames){
        if(fs.existsSync(fname)){
            const data = fs.readFileSync(fname, {encoding:'utf8', flag:'r'}); 
            console.log(data);
        }else{
            console.log(`File named ${fname} does not exist`);
        }
    }
}

module.exports = {
    fn: displayfn
}