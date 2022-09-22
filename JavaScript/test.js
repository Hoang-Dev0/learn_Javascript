// // 1
// var formValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ];

//     var obj = [];
// var check = formValues.forEach(function (i) {
//         obj[i.field] = i.value;
//         console.log(obj)
//     })
// console.log(check);

// // 2
// console.log(Math.floor(Math.random()))

// 3 : map2

// var courses = [
//     'Javascript',
//     'Ruby',
//     'PHP'
// ]

// Array.prototype.map2 = function(callBack) {
//     var output = [],
//         arrayLength = this.length;

//     for (var i = 0; i < arrayLength; i++) {
//         var result = callBack(this[i], i);
//         output.push(result);
//     }
//     return output;
// }

// var htmls = courses.map2(function(i , index) {
//     return `<h2>${i}</h2>`;
// })

// console.log(htmls.join(''));

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 500,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];

// var arr = courses.filter(function (i, index, array) {
//   return i.coin === 500;
// });

// console.log(arr);
 

console.log([document.getElementById('heading')]);