
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  expectancy() {
    let lifeExp = Math.floor(75 - this.age);
    if (lifeExp < 0) {
      return (lifeExp * -1);
    } else {
      return lifeExp;
    }
  }

  mercuryAge() {
    let mercuryAge = Math.floor(this.age / .24);
    return mercuryAge;
  }

  venusAge() {
    let venusAge = Math.floor(this.age / .62);
    return venusAge;
  }

  marsAge() {
    let marsAge = Math.floor(this.age / 1.88);
    return marsAge;
  }

  jupiterAge() {
    let jupiterAge = Math.floor(this.age / 11.86);
    return jupiterAge;
  }

  mercExpLife() {
    let yearsLeft = Math.floor(75 - this.age);
    let mercExpLife = Math.floor(yearsLeft / .24);
    if (yearsLeft < 0){
      return (yearsLeft * -1)
    } else {
      return mercExpLife
    }
  }

  venusExpLife() {
    let yearsLeft = Math.floor(75 - this.age);
    let venusExpLife = Math.floor(yearsLeft / .62);
    if (yearsLeft < 0){
      return (yearsLeft * -1)
    } else {
      return venusExpLife
    }
  }

}