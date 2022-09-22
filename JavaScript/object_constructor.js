// Object constructor -- Hàm khởi tạo


// Declaration function
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Expression function
var User2 = function(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}




var author = new User('Phuc', 'Hoang', 'avatar');
var user = new User('Phuc', 'Huy', 'avatar');

author.title = 'Hôm nay là thứ 6';

console.log(author.getClassName());
console.log(user);