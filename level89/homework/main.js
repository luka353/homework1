class Human {
  constructor(name, age, email = "UNKNOWN", phone = "UNKNOWN", address = "UNKNOWN") {
    this.name = name;
    this._age = age;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  checkAge() {
    return this._age < 50 ? `${this.name} არის ახალგაზრდა` : `${this.name} არის ხანდაზმული`;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 18) {
      console.warn(`${this.name} არის არასრულწლოვანი!`);
    }
    this._age = value;
  }
}

class Humans {
  constructor() {
    this.list = [];
  }

  add(human) {
    this.list.push(human);
  }

  showOver50() {
    return this.list.filter(h => h.age > 50);
  }
}

class Employee extends Human {
  constructor(name, age, salary, email, phone, address) {
    super(name, age, email, phone, address);
    this.salary = salary;
  }

  showSalary() {
    return `${this.name} იღებს ${this.salary}₾`;
  }
}

class Student extends Human {
  constructor(name, age, grade, email, phone, address) {
    super(name, age, email, phone, address);
    this.grade = grade;
  }

  showGrade() {
    return `${this.name}-ის ქულაა ${this.grade}`;
  }
}

// გამოყენება
const h1 = new Human("Gio", 25);
const h2 = new Human("Nino", 60, "nino@mail.com");
console.log(h1.checkAge());
console.log(h2.checkAge());

const group = new Humans();
group.add(h1);
group.add(h2);
console.log(group.showOver50());

const emp = new Employee("Lasha", 30, 5000);
console.log(emp.showSalary());

const stud = new Student("Ana", 17, "A");
console.log(stud.showGrade());
stud.age = 16;