var emailKey = "email";

var myInfo = {
  name: "Phuc Hoang",
  age: 21,
  address: ["Sai Gon, Da Nang, Ha Noi"],
  [emailKey]: "phuchoang@gmail.com", //ES6
  getName: function () {
    return this.name;
  },
};

var myKey = "address";
console.log(myInfo[myKey]);
console.log(myInfo["age"]);

// Delete key

// delete myInfo.age;
// console.log(myInfo.getName());

// Function --> Phương thức/ Method
// Others --> Thuộc tính/ property

// function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
