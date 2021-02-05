
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  expectancy() {
    let lifeExp = Math.floor(75 - this.age);
    if (lifeExp < 0) {
      return (lifeExp * -1);
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
    return mercExpLife;
  }

  venusExpLife() {
    let yearsLeft = Math.floor(75 - this.age);
    let venusExpLife = Math.floor(yearsLeft / .62);
    return venusExpLife;
  }

  marsExpLife() {
    let yearsLeft = Math.floor(75 - this.age);
    let marsExpLife = Math.floor(yearsLeft / 1.88);
    return marsExpLife;
  }

  jupiterExpLife() {
    let yearsLeft = Math.floor(75 - this.age);
    let jupiterExpLife = Math.floor(yearsLeft / 11.86);
    return jupiterExpLife;
  }

  showDisplay(){
    const exp = this.mercuryAge() - 75;
    if (this.age > 75) {
      return (`You have lived ${exp} years past the life expectancy on Mercury`);
    } 
  }

  showDisplayVenus(){
    const exp = this.venusAge() - 75;
    if (this.age > 75) {
      return (`You have lived ${exp} years past the life expectancy on Venus`);
    } 
  }


}