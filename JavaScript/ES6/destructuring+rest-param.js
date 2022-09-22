// Destructuring : phân rã array or object
// ...biến : rest parameter
// 1.array
var array = ["java", "PHP", "Ruby"];

//case 1:
// var [a, , c] = array;
// console.log(a, c); // return java Ruby

// case 2:
// var [, ...b] = array;
// console.log(b); //return ["PHP", "Ruby"]

// Object
var course = {
  name: "Javascript",
  price: 1000,
  image: "image-address",
};
// đây là cách xóa 1 key trong object mà ko dùng delete
var { name, ...newObject } = course;
console.log(newObject);

// Function
//case 1:
function logger(a, b, ...param) {
  console.log(param); // return [3,4,5]
}

logger(1, 2, 3, 4, 5);
// case 2:
function logger({ name, price, ...rest }) {
  console.log(name); // return Javascript
  console.log(price); // return 1000
  console.log(rest); // return {description}
}

logger({
  name: "Javascript",
  price: 1000,
  description: "This is description",
});
