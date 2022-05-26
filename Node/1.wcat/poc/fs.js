//fs-> File system module-> it helps us to make files/folder append data in them, delete data, read data
const fs=require("fs");//require("path_of_the_file");
//const f1=require("./f1.txt");
const abc=require ("../../../HTML/Javascript/temp");
console.log(abc);


// console.log(fs);
// appendfilesync appends data into a file , if file is not present, it creates the file and then appends the data
                //file path //data to be appended
fs.appendFileSync("f1.txt", "Hello i am f2 file");
fs.appendFileSync("f1.txt", "\nYou guys are smart");
// console.log(res);

let data = fs.readFileSync("f1.txt");
//data received is an object type, data is in buffer format. For it to be readable , we convert it from buffer to string.
console.log(data+"");//automatic type conversion se buffer string mein convert ho gayi hai

// let data = fs.readFileSync("f1.txt", "utf-8");
// console.log(data);