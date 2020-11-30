class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getEmployeeInfos() {
    return `Name: ${this.name}; Age: ${this.age}`;
  }
} 

class Seller extends Employee {
  constructor(name, age, commision) {
    super(name, age);
    this.commision = commision;
  }

  getSellerInfos() {
    return `Name: ${this.name}; Age: ${this.age}; commision: ${this.commision}`;
  }
}

const Jully = new Employee("Jully", 23);
console.log(Jully);

const Jonh = new Seller("Jonh", 34, 12.6);
console.log(Jonh);