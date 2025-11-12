//  function outer (){

//     let value = 0;

//     function inner (){

//         value++;

//        console.log(value);

//     }

//     return inner

//  }

// let innercalling = outer()

// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()
// innercalling()

// function user() {
//   let account_Balance = 1000;

//   return {
//     deposite: function (amount) {
//       if (amount === Number || amount > 0) {
//         account_Balance += amount;
//       }
//     },
//     withdraw: function (amount) {
//       if (account_Balance - amount >= 1000) {
//         account_Balance -= amount;
//       } else {
//         console.log("aaap paise nahi nikal sakte condition ke according ");
//       }
//     },

//     show_balance: function () {
//       console.log(account_Balance);
//     },
//   };
// }

// const mukesh = user();

// account_Balance = "898";

// mukesh.deposite(5000);

// mukesh.show_balance();


// Higher Order Fuction 


function greet (name){

    return `Hello ${name}`
}


function print (callback){

    let name = "Mukesh";

   console.log(callback(name));
   
}

print(greet)