// constructer
function Course(name, description) {
  this.name = name;
  this.description = description;
}

let khoaHoc = new Course("java", "java la ngon ngu");
console.log(khoaHoc.name);

// class
// arrow function:
// ko có argument: () => {}
// có 1 argument: có thể xóa bớt dấu ngoặc ()


class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  getNameProject() {
    return `Day la ham ${this.name}, ${this.description}`;
  }
}

let project = new Project("my project", "project nay cua toi");
// console.log(project.getNameProject());
console.log(`${project.name}, ${project.description} ${project.getNameProject()}`);
