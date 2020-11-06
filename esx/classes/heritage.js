class Person {
  constructor(first_name, second_name) {
    this.first_name = first_name;
    this.second_name = second_name;
  }

  get fullname() {
    return this.first_name + ' ' + this.second_name;
  }
}

class Professional extends Person {
  setProfessions(...professions) {
    return this.professions = professions;
  }

  getProfessions() {
    return this.professions;
  }
}

p = new Professional('Adriano', 'Oliveira');
console.log(p.fullname);
p.setProfessions('Pianist', 'Software Developer', 'Conposer', 'Arranger');
p.getProfessions().forEach(profession => {
  console.log(profession);
});



