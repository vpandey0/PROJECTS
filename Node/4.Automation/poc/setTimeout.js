// // {
// function yolo(){
//     var x=10;
//     function cb(err, res){
//         if (err){
//           console.log(err);
//         }
//         else{
//         console.log("hello how are you ?");
//         }
//     }
//     // function to be executed (callback fun), time(ms) after which cb to be executed
//     // 1 sec= 1000 milli sec
//     setTimeout(cb,5000);
//     console.log(x);
// }


// yolo();
// let b=100;
// console.log(b);
// }

// const request=require("request");
// let url="https://www.worldometers.info/coronavirus/"
// function yolo(){
//     var x=10;
//     function cb(err, res,body){
//         if (err){
//           console.log(err);
//         }
//         else{
//         console.log("hello how are you ?");
//         console.log("status code is", res.statusCode);
//         }
//     }
//     // function to be executed (callback fun), time(ms) after which cb to be executed
//     // 1 sec= 1000 milli sec
//     request(url,cb);
//     setTimeout(cb,5000);
//     console.log(x);
// }
// yolo();
// let b=100;
// console.log(b);

//we have to print 1 to n number with 2 sec interval  
for(let i=1;i<=10;i++){// here firstly we took var bcos of the o/p is 11 ten times,  to get  desird o/p let is used;
  setTimeout(function(){
    console.log(i);
  },2000*i);// previously we used 2000 only but as we observed after printing 1 it takes 2sec to print 2 then same for 3 so effectively 3, 1 k baad 4 sec print hora hai islia (2000*i)
}