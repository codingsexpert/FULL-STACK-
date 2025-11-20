// let arr = [30,40,50,60]

// let rupees = arr.map((price)=> price*88);
// console.log(rupees);

// const users = [
//   { id: 101, name: "Aman Sharma", age: 22, city: "Delhi", purchases: 5 },
//   { id: 102, name: "Riya Mehta", age: 19, city: "Mumbai", purchases: 1 },
//   { id: 103, name: "Mohit Gupta", age: 27, city: "Pune", purchases: 8 },
//   { id: 104, name: "Muskan Jain", age: 21, city: "Jaipur", purchases: 2 },
//   { id: 105, name: "Harsh Yadav", age: 29, city: "Delhi", purchases: 4 },
//   { id: 106, name: "Anjali Verma", age: 23, city: "Chennai", purchases: 10 },
// ];

// // let nameslist = users.map((name)=> name.name);
// // console.log(nameslist);
// let nameCitylist =users.map((list)=> ({Name : list.name, City:list.city,Age : list.age }));
// console.log(nameCitylist);

// filter method 

// const products = [
//   { id: 1, name: "Keyboard", price: 650, rating: 4.2, inStock: true },
//   { id: 2, name: "Mouse", price: 350, rating: 3.9, inStock: true },
//   { id: 3, name: "Laptop", price: 55000, rating: 4.7, inStock: false },
//   { id: 4, name: "Bag", price: 900, rating: 4.1, inStock: true },
//   { id: 5, name: "Shoes", price: 1200, rating: 4.0, inStock: false },
//   { id: 6, name: "Tripod", price: 700, rating: 4.4, inStock: true },
//   { id: 7, name: "Mic", price: 1500, rating: 4.8, inStock: true }
// ];

// let productlist = products.filter((product)=> product.price > 1000);
// console.log(productlist);

// let rating = products.filter((rating)=> rating.rating > 4.2)
// console.log(rating);

// let available = products.filter((product)=> product.inStock === true)
// console.log(available);

// const orders = [
//   { orderId: "A101", price: 1200, qty: 1, status: "delivered" },
//   { orderId: "A102", price: 350, qty: 1, status: "pending" },
//   { orderId: "A103", price: 500, qty: 3, status: "delivered" },
//   { orderId: "A104", price: 2200, qty: 1, status: "cancelled" },
//   { orderId: "A105", price: 1500, qty: 2, status: "delivered" },
//   { orderId: "A106", price: 700, qty: 2, status: "delivered" },
// ];

// // let revenue = orders.reduce((accumulator , currentValue) => accumulator+(currentValue.price*currentValue.qty),0);
// // console.log(revenue);
// const stats = orders.reduce((acc, curr) => {
//   acc[curr.status] = (acc[curr.status] || 0) + 1;
//   return acc;
// }, {});

// console.log(stats);

// const emails = [
//   "test@gmail.com", "user@gmail.com",
//   "test@gmail.com", "admin@gmail.com",
//   "user@gmail.com", "support@gmail.com"
// ];

// let uniqueemails = new Set(emails)

// console.log(uniqueemails);
// let s1 = new Set()



// console.log(s1);

// let visitors = new Set()
// visitors.add("Mukesh")
// visitors.add("Ankit")
// visitors.add("Ankit")
// visitors.add("Ankit")
// visitors.add("Ankit")
// visitors.add("Ankit")
// visitors.add("Mahi")
// visitors.delete("Ankit")


// console.log(visitors);
const customerOrders = [
  { id: 1, customer: "Aman", status: "delivered", amount: 1200, city: "Delhi" },
  { id: 2, customer: "Riya", status: "pending", amount: 700, city: "Mumbai" },
  { id: 3, customer: "Mohit", status: "delivered", amount: 2400, city: "Pune" },
  { id: 4, customer: "Muskan", status: "cancelled", amount: 900, city: "Delhi" },
  { id: 5, customer: "Harsh", status: "delivered", amount: 3500, city: "Chennai" },
  { id: 6, customer: "Aman", status: "delivered", amount: 1500, city: "Delhi" },
];

let delivered = customerOrders.filter((order)=> order.status === "delivered");

console.log(delivered);

let amount = delivered.map((amt )=>amt.amount);
console.log(amount);
let revenue = amount.reduce((acc,curr)=> acc+curr,0)
console.log(revenue);

