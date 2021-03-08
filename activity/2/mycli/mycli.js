
const displayFile = require('./commands/display');
const transferContentFile = require('./commands/transfer');
const updateFile = require('./commands/update');
const updateAndTransferFile = require('./commands/updateAndTransfer');

let input = process.argv.slice(2);

const flag = [];
const operator = [];
const fileNames = [];

for(let i = 0; i < input.length; i++){
    let val = input[i];
    if(val == '-s' || val == '-n' || val == '-b'){
        flag.push(val);
    }else if(val == '>' || val == '>>'){
        operator.push(val);
    }else{
        fileNames.push(val);
    }
}

let command = input[0];

if(command === fileNames[0] && operator.length === 1 && fileNames.length === 2){
    transferContentFile.fn(fileNames, operator);
}else if(command === fileNames[0]){
    displayFile.fn(fileNames);
}else if(command === '-s' && operator[0] === '>' && fileNames.length === 2){
    updateAndTransferFile.fn(fileNames, flag, operator);
}else if(command === flag[0] && fileNames.length === 1){
    updateFile.fn(fileNames, flag);
}else{
    console.log("wrong command type help for all the commands");
}

