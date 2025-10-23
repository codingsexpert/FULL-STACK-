

let now = new Date(2025,10,19,6,45,56,76);
// console.log(now.getTime());
// console.log(now.getDay());
// console.log(now.getMonth());

// console.log(now.getFullYear());

console.log(now);





let d = new Date();
console.log(d.toDateString());     // "Wed Oct 15 2025"
console.log(d.toTimeString());     // "21:10:00 GMT+0530"
console.log(d.toLocaleDateString()); // "10/15/2025"
console.log(d.toLocaleTimeString()); // "9:10:00 PM"
console.log(d.toISOString());        // "2025-10-15T15:40:00.000Z"

