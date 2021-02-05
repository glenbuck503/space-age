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
    expect(person.jupiterExpLife()).toEqual(100)
  });


});