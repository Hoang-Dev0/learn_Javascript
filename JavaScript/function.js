// var fullName ="Phuc Hoang";
// alert(fullName);
// console.log(fullName);


// function showDialog() {
//     alert('Hi xin chao cac ban')
// }

function writeLog() {
    var myString ='';
    for(var i of arguments) {
        myString += `${i}` + '-';
    }
    console.log(myString);

}

// writeLog('nguyen' ,'phuc' ,'hoang');

function showMessage() {
    console.log('message 1')
}
function showMessage() {
    console.log('message 2')
}
function showMessage() {
    console.log('message 3')
}

showMessage();