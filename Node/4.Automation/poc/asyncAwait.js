// PROMISE
// CHATUR-SILENCER
function fp(){
    return new Promise(function(resolve,reject){
    resolve("hi");
    });
}

let Promisifyfunc=fp();
Promisifyfunc.then(function(data){
console.log(data);
});

Promisifyfunc.catch(function(err){
console.log(err);
});

//using async keyword
//asaan bhasaa rancho
async function f(){
    return "hello";
}

let async=f();
async.then(function(data){
    console.log(data);
});
async.then(alert);

// AWAITS- the keyword await makes js wait until the promise settles(definite ans mil gya hai either fulfil hogya hai or reject hogya hai) and return its result
// The function execution "pauses" at the line 39 and resumes when the promises settles, with "result" variable
//await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
//await waits for promise settlements, so it takes care of both .then and .catch
async function f(){
    let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("done!");
    },5000);
    });

    let result=await promise;// wait until promise resolves
    console.log("hello!");//done!
}
f();
console.log("yolo");