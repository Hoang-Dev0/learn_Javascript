// Lưu ý:- rest parameter và được dùng kết hợp với desctructuring.
//       - spread argument

// array
var array1 = ['Javascript','Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array2, ...array1];
console.log(array3); //return ['ReactJS', 'Dart','Javascript','Ruby', 'PHP'];

// object