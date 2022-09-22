const logger = (log, type = "log") => {
  console[type](log);
};

logger("Message....", "warn");

var fieldHighName = "highName";

const courses = {
  id: 1,
  name: "Hoang",
  [fieldHighName]: "Nguyen Phuc Hoang",
};
// console.log(Object.keys(courses)[2]);
console.log(courses["name"]);




var array = ["Javascript", "PHP", "ReactJS", 'C++'];

function logger2(...rest) {  // ... : rest
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

logger2(array);// return ["Javascript", "PHP", "ReactJS"]
logger2(...array);// return Javascript PHP ReactJS C++ /  ...: spread

