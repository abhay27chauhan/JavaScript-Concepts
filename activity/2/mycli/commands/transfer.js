const fs = require('fs');

function transferfn(fileNames, operator){
    const src = fileNames[0];
    const dest = fileNames[1];
    if(fs.existsSync(src) === false){
        console.log(`src file named ${fname} does not exist`);
        return;
    }
    if(operator === '>'){
        const data = fs.readFileSync(src, {encoding:'utf8', flag:'r'}); 
        fs.writeFileSync(dest, data); 
    }else if(operator === '>>'){
        const data = fs.readFileSync(src, {encoding:'utf8', flag:'r'}); 
        fs.appendFileSync(dest, data);
    }else{
        console.log('wrong command');
    }
}

module.exports = {
    fn: transferfn
}