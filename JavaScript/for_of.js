// For/of biến sẽ trả về value 
// For/in biến sẽ trả về key/index
var language = [
    'Javascript',
    'Ruby',
    'PHP'
];

for(var i of language) {
    console.log(i)
}


var myInfo = {
    name: 'Phuc Hoang',
    age: 21
};

console.log(Object.keys(myInfo));

for(var i of Object.keys(myInfo)) {
    console.log(i);
}