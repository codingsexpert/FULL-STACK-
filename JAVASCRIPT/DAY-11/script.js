// function  greet (){

//     console.log("Hello World ");

// }

// greet()

// function sum (){
//     let a = 50 ;
//     let b = 80;
//     let c = a+b;
//     console.log(c);

// }

// sum()

// add(60,80)
// function add (a,b){

//     console.log(a+b);

// }

// console.log(add(20,50));

// add(30,60);

// let  squar = function(){
//     let num = 6;
//     console.log(num*num);

// }

// squar()

// let squar = function (num){

//     return num*num
// }

// console.log(squar(5));

//  greet = () => {
//     console.log("Hello World");
//     console.log("Hello Codings Expert kaise ho ");

// }

// greet()
// sum = squar => squar*squar

// console.log(sum(7));

// const sayHello = () => console.log("Hello!");

// sayHello()

// (greet  = () =>{
//     console.log("Hello Coding Expert");

// })();

// myself = (name , age) =>{

//    console.log(`My name is ${name} and age is ${age}`);

// }

// myself("Mukesh", 20)

// hello = (name = "Guest") =>{
//     console.log("Hello",name);

// }
// hello("Mukesh")

// let arr1 = [20,30,40]
// let arr2 = [50,50,70]

// console.log(...arr1,...arr2);

// multiply = (num1,num2,num3,num4) =>{

//    console.log(num1*num2*num3*num4);

// }

// multiply(2,5,4,6)

// sum = (...num)=>{

//     return num.reduce((a,b) => a+b)
// }

// console.log(sum(20,40,45,34,));

// function getArea(r) {
//   return r+r
// }
// let area = getArea(5);
// console.log(area);

// let x =  30;

// value = ()=>{
//     console.log(x);
//     let y = 40;

// }

// value()

// console.log(y);

// function outer (){

//     function inner(){

//         console.log("I am inner function");

//     }

//     inner()

// }
// outer()

// function display (result){

//     console.log("Result" ,result);

// }

// function add(a,b,callback){
//     let sum = a+b

//     callback(sum)

// }

// display("passed")
// console.log(add(20,40));
// add(30,40,display)

let account_Balance = 1000;

function deposite(amount) {
  if (amount === Number || amount > 0) {
    account_Balance += amount;
  }
}

function withdraw(amount) {
  if (account_Balance - amount >= 1000) {
    account_Balance -= amount;
  } else {
    console.log("aaap paise nahi nikal sakte condition ke according ");
  }
}
function show_balance() {
  console.log(account_Balance);
}

// deposite(1000)
// deposite(1500)
// withdraw(3000)
// withdraw(400)
deposite(500);
withdraw(500);
show_balance();
