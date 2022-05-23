let inputArr=process.argv.slice(2);
let fs=require("fs");
let command=inputArr[0];

switch(command){
case "tree": treeFn(inputArr[1]);
break;
case "organize": organizeFn(inputArr[1]);
break;
case "help": helpFn();
break;
default: console.log("Please 😪😪😪 input something correct")
}

function treeFn(dirPath){
    console.log("Executed tree fn");
}

function organizeFn(dirPath){
   // console.log("Executed organize fn");
if(dirPath==undefined){
    console.log("plz specify path");
    return;
}else{
let doesExist=fs.existsSync(dirPath);
if(doesExist){

let destPath=path.join(dirPath,"organized_files");
if(fs.existsSync(destPath)==false){
    fs.mkdirSync(destPath);
}
} else{

    console.log("Kindly enter the correct path");
    return
}


}




















}

function helpFn(dirPath){
    console.log(`
    List of all commands : 
        node main.js tree "directory path" 
        node main.js organize "directory path"
        node main.js help`);
}