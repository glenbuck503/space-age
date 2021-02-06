import Person from '../src/js/space.js';

describe('Person', () => {
  let person; beforeEach(() => {
    person = new Person ("GlenBuck", 36);
  });

  test('should show how many years the user has lived past the life expectancy', () => {
    let lifeExp = new Person ("LifePast", 76)
    expect(lifeExp.expectancy()).toEqual(1)
  });

  

  test('should take user input and create object', () => {
    expect(person.name).toEqual("GlenBuck");
    expect(person.age).toEqual(36);
  });

  test('should show user age in mercury years,', () => {
    expect(person.mercuryAge()).toEqual(150)  
  });

  test('should show user age in venus years', () => {
    expect(person.venusAge()).toEqual(58)
  });

  test('should show user age in mars years', () => {
    expect(person.marsAge()).toEqual(19)
  });

  test('should convert user age into jupiter age', () => {
    expect(person.jupiterAge()).toEqual(3)
  });

  test('should show the years that the user has left on mercury', () => {
    expect(person.mercExpLife()).toEqual(162)
  });

  test('should show the years that the user has left on venus', () => {
    expect(person.venusExpLife()).toEqual(62)
  });

  test('should show the years that the user has left on mars', () => {
    expect(person.marsExpLife()).toEqual(20)
  });

  test('should show the years that the user has left on jupiter', () => {
    expect(person.jupiterExpLife()).toEqual(3)
  });

  test('should dsiplay user years lived past on mercury', () => {
    let mercPast = new Person ("GlenBuck", 78)
    let age = mercPast.mercuryAge(); 
    let exp = mercPast.mercuryAge() - 75; 
    expect(mercPast.showDisplay()).toEqual(` Your age on Mercury is : ${age}. You have lived ${exp} years past the life expectancy on Mercury`)
  }); 
  test('should dsiplay user years left on mercury', () => {
    let mercLeft = new Person ("GlenBuck", 35)
    let age = mercLeft.mercuryAge(); 
    let exp = mercLeft.mercuryAge() - 75; 
    expect(mercLeft.showDisplay()).toEqual(` Your age on Mercury is : ${age}. You still have ${exp * 1} years on Mercury`)
  }); 

  test('should dsiplay user years lived past on Venus', () => {
    let venPast = new Person ("GlenBuck", 80)
    let age = venPast.venusAge(); 
    let exp = venPast.venusAge() - 75; 
    expect(venPast.showDisplayVenus()).toEqual(` Your age on Venus is : ${age}. You have lived ${exp} years past the life expectancy on Venus`)
  }); 

  test('should dsiplay user years left on Venus', () => {
    let venLeft = new Person ("GlenBuck", 80)
    let age = venLeft.venusAge(); 
    let exp = venLeft.venusAge() - 75; 
    expect(venLeft.showDisplayVenus()).toEqual(` Your age on Venus is : ${age}. You have lived ${exp} years past the life expectancy on Venus`)
  }); 

  test('should display user years lived past on Mars', () => {
    let marsPast = new Person ("GlenBuck", 80)
    let age = marsPast.marsAge(); 
    let exp = marsPast.marsAge() - 75; 
    expect(marsPast.showDisplayMars()).toEqual(` Your age on Mars is : ${age} You have lived ${exp * -1} years past the life expectancy on Mars`);
  }); 

  test('should display user years left on Mars', () => {
    let marsleft = new Person ("GlenBuck", 55)
    let age = marsleft.marsAge(); 
    let exp = marsleft.marsAge() - 75; 
    expect(marsleft.showDisplayMars()).toEqual(` Your age on Mars is : ${age}. You still have ${exp * -1} years on Mars`);
  }); 
});
  