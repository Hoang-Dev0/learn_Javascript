
/*
    Math object
- Math.PI
- Math.round() : làm tròn số
- abs() : giá trị tuyệt đối (có thể biến số âm thành số dương)
- ceil() : làm tròn trên
- floor() : làm tròn dưới
- random()
- min()
- max()
*/

console.log(Math.floor(Math.random() * 100));

// console.log(Math.floor(0.9873485060007083 * 5));

function myFunction(value) {
    if(typeof value === 'function'){
        
        value('Hoc lap trinh');
    }
}

function callBack(value2){
    console.log('Gia tri: '+ value2);
}

myFunction(callBack);
