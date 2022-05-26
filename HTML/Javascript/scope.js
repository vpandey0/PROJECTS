// function outer() {
//     inner();
//     function inner() {
//         console.log(b);
//     }
// }
// var b = 10;
// outer();
// console.log(b);


/*scope:
where can this variable/function be accesed in the code 
                            OR 
is variable/function inside the scope of code/function*/


// lexical env = local memory + lexical env of parent;
// scope chain: chain of lexical environment and the parent refferences.


// let randomValue = { name: "Lydia" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
//   console.log("It's not a string!");
// } else {
//   console.log("Yay it's a string!");
// }

// const user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)

// const fruit = ['🍌', '🍊', '🍎']

// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('🍇')

// console.log(fruit)

// A: ['🍌', '🍊', '🍎']
// B: ['🍊', '🍎']
// C: ['🍇', '🍊', '🍎']
// D: ['🍇', '🍌', '🍊', '🍎']

// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) count += 1
// }

// console.log(count)

// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;

// const add = function (x) {
//     return x + x;
// }

// function myFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }

// myFunc();
// myFunc(3);

// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
//   var randomValue = 'Lydia Hallie';
// }

// getInfo();

// const add = function (x) {
//     function inner (y) {
//         function innermost (z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//         innermost(6);
//     }
//     inner(5);
// }

// add(4);

// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   for (const item in person) {
//     console.log(item);
//   }
// console.log(3 + 4 + '5');

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
//   console.log(person);
  
//   let city = person.city;
//   city = 'Amsterdam';
//   console.log(person);


// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;
// function sumValues(x, y, z) {
//     return x + y + z;
//   }

// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(food);

// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return
//     a + b;
//   }
  
//   console.log(nums(4, 2));
//   console.log(nums(1, 2));

// let newList = [1, 2, 3].push(4);

// console.log(newList.push(5));
// console.log('I want pizza'[0]);
// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
//   console.log(checkAge(21));

let a=20;
a=10;
console.log(a);
// console.log(a===10);
// console.log(a==="10");
  