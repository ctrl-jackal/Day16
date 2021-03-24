class Person {
  constructor(name, email, age){
    this.name = name;
    this.email = email;
    this.age = age;
  }
  getPerson(){
    let personInfo = {
      Name: this.name,
      email: this.email,
      age: this.age,
    };
    return personInfo;
  }
}

// let osoba = new Person("Maid", "maidsivac@gmail.com", 28);
// console.log(osoba.getPerson());

module.exports = Person;
// console.log(module.exports);
