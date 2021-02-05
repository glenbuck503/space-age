
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercuryAge() {
    let mercuryAge = Math.floor(this.age / .24);
    return mercuryAge;
  }

  venusAge() {
    let venusAge = Math.floor(this.age / .62);
    return venusAge;
  }

}