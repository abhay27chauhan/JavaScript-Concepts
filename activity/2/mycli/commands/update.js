const fs = require('fs');

function updatefn(fileNames, flag){
    if(flag === '-s'){
        
    }else if(flag === '-n'){

    }else if(flag === '-b'){

    }else{
        console.log('wrong command');
    }
}

module.exports = {
    fn: updatefn
}