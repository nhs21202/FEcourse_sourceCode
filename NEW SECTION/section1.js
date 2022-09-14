// let number = 0;
// let string = 'Hello';
// let boolean = true;
// let nullJs = null;

// let object = {
//     name: 'Minh',
//     class: '62B CNTT'
// };

// let array = [1, 'true', object]; 

// const PI = Math.PI;

// console.log(typeof(number));
// console.log(typeof(string));
// console.log(typeof(boolean));

// console.log(number);
// console.log(string);
// console.log(boolean);
// console.log(object);
// console.log(array);
// console.log(PI)

// const number = 3;

// if(number % 2  == 0) console.log("Even");
// else console.log("Odd");

// switch (key){
//     case 1: 
//         break;
    
//     default:
//         break;
// // }

// let string1 = 'Hello';
// let string2 = ' Minh';
// let number = 3;
// let string3 = string1 + string2 + number;

// console.log(string3);

// let number1 = 1;
// let number2 = '1';

// //If different type, javascript will exchange all to number
// console.log(number1 == number2); 
// //Should use
// console.log(number1 === number2);

// for(let k=0;k<10;k++){
//     console.log(k);
// }

// let i = 3
// while(i != 0){
//     console.log(i);
//     i--;
// }

//Do while
// let i = 3;
// do {
//     i--;
//     console.log("Hello");
// } while(i != 0){
//     console.log(i);
// }

// let fruits = ['banana','pickle'];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

let a = 1; //scope global
function callHello (req, res){ //scope req, res in function
    console.log(req + res);
}
callHello(1, 2);