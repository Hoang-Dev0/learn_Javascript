/**
 * 1. To string
 * 2. Join (chuyển array thành chuỗi, có thể thay dấu ngăn cách )
 * 3. Pop (Xóa element CUỐI mảng và trả về phần tử đã xóa)
 * 4. Shift (Xóa element ĐẦU mảng và trả về phần tử đã xóa)
 * 5. Push (Thêm 1 or nhiều phần tử vào CUỐI mảng và trả về độ dài của mảng)
 * 6. Unshift (Thêm 1 or nhiều phần tử vào ĐẦU mảng và trả về độ dài của mảng)
 * 7. Splice (Xóa or thêm phần tử vào mảng, trả về phần từ vừa xóa)
 * 8. Concat (Nối chuỗi)
 * 9. Slice (Cắt 1 vài element của array)
 * 10. indexOf()
 */
var languages = [
    'Java',
    'Ruby',
    'PHP'
];

var languages2=[
    'Dart',
    'C++'
]
var number=[
    0,
    1,
    2,
    3,
    4,
    5
];
// // console.log(languages.join(', '));
// // console.log(languages.pop());
// console.log(languages.push('oject C','c++'));
// console.log(languages.shift(languages));

// languages.splice(1,2); // xóa theo index
// languages.splice(1 ,0 , 'Dart') //(index, xóa, thêm)
// console.log(languages.concat(languages2));
// languages.slice(1,2);
// console.log(languages.slice(1,2));// (index start, index end)

// console.log(number.splice(1,1,'Monkey','Tiger'));
// console.log(number);

/*********************************************************************** */


/*
    Array methods:
        forEach() : return : undefined (nếu chỉ cần duyệt qua mảng)
        every() : return true/false
        some() : return true/false
        find()
        filter() : return new array
        map() : return new array ( nếu muốn thay đổi các giá trị trong mảng)
        reduce() : return value ( initial value khi cần kiểu trả về đúng như mình mong muốn) return single value
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }

];

// for(var i = 0; i < courses.length; i++) {
//     console.log(courses[i]);
// }

// // forEach()
// courses.forEach(function(index, course) {
//     console.log(index, course);
// });

// every()

// var isFree = courses.every(function(course) {
//     return course.coin === 0;
// });

// console.log(isFree);

// some()

// var isFree = courses.some(function(course) {
//     return course.coin === 0;
// });

// console.log(isFree);

// find()

// var course = courses.find(function(i, index) {
//     return i.name === 'ReactJS';
// });


// var check = courses.find(function(course) {
//     return course.name === "Ruby2";
// });

// console.log(typeof  check);


// reduce()

var totalCoin = 0;

for (var i = 0; i < courses.length; i++) {
    totalCoin += courses[i].coin;
}

// for (var i of courses) {
//     totalCoin += i.coin;
// }

console.log(totalCoin);

// Bài tập
// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu ";
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
   return flatOutput.concat(depthItem);
},[]);

console.log(flatArray);


var numbers = [1, 2, 3, 4, 5];
var total = 0;

for(i = 0; i < numbers.length; i++){
    total += numbers[i];
}

console.log(typeof numbers);
