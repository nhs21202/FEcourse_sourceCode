

//HOISTING
// js defines var name above all lines: var name;
//var name;
// solution: defines all values on top 
// console.log('abc',name);
// let name = "Nguyen Hoa Son";
//==
// console.log('abc',name);
// var name = "Nguyen Hoa Son";
/*
var: automatically defines on top
let: defines urself
let and const have hoisting (defines on top),
cannot access because they are wrapped in temporal deadzone=> cannot access
*/

//OBJECT JSON
//array
// const arr = [true,'false',1,{name: "Son"}];
// console.log(arr);
// //spread operator
// const arr2 = [...arr];
// console.log(...arr);

//object
// let object = {
//     name: 'Nguyen Hoa Son',
//     age: 20
// }
// const idol = 'BTS'
// let person = {
//     university: "NEU",
//     ...object,
//     idol//object literal: key and value have the same name => remove the name of value
// }

// console.log(person)
//console.log({...object});
//spread: {} for object []for array


//primitive type: number,string,boolean: copy values
//reference type: array, object: copy address
// let x=1;
// let y=x;
// y++;
// console.log(x,y);
// let arr = [1,2,3]
// let arr2=arr;
// arr2[0] = 4;
// let arr3= [...arr];
// arr3[0] = 10
// console.log(arr3);
let object1 = {
    name: "Son",
    Flyable: {
        val:true
    }
}
// let object2 = {...object1};//shallow clone, object still reference to the address of the previous obj

// object2.name = "Duc";
// object2.Flyable.val = false;
// console.log(object1, object2);

//deeply clone
const arr=[1,32,3];
let stringify = JSON.stringify(arr);
//console.log(typeof stringify);//JS object notation
const arr2 = JSON.parse(stringify);//convert string to json
// console.log(stringify)
// console.log(parsed)
// object2.Flyable.val= false;
// object2.name="Nam"
// console.log(object1)
// console.log(object2)
//convert object1 to string, and parse will convert the string to a new object JSON
//array is an object, key is index and a new key called "length"
//console.log(arr,arr2);
console.log(typeof arr);
//   node .\index.js
