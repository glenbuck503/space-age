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
    const age = this.mercuryAge();
    if (this.age > 75) {
      return (` Your age on Mercury is : ${age}. You have lived ${exp * 1} years past the life expectancy on Mercury`);
    } else  {
      return (` Your age on Mercury is : ${age}. You still have ${exp} years on Mercury`);
    }
  }

  showDisplayVenus(){
    const exp = this.venusAge() - 75;
    const age = this.venusAge();
    if (this.age > 75) {
      return (` Your age on Venus is : ${age}. You have lived ${exp} years past the life expectancy on Venus`);
    } else {
      return (` Your age on Venus is : ${age}. You still have ${exp * -1} years on Venus`);
    }
  }

  showDisplayMars(){
    const exp = this.marsAge() - 75;
    const age = this.marsAge();

    if (this.age > 75) {
      return (` Your age on Mars is : ${age} You have lived ${exp * -1} years past the life expectancy on Mars`);
    } else {
      return (` Your age on Mars is : ${age}. You still have ${exp * -1} years on Mars`);
    }
  }

  showDisplayJupiter(){
    const exp = this.jupiterAge() - 75;
    const age = this.jupiterAge();

    if (this.age > 75) {
      return (` Your age on Jupiter is : ${age}. You have lived ${exp * -1} years past the life expectancy on Jupiter`);
    } else {
      return (` Your age on Jupiter is : ${age}. You still have ${exp * -1} years on Jupiter`);
    }
  }
}
