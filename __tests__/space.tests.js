import Person from '../src/js/space.js';

describe('Person', () => {
  let person; beforeEach(() => {
    person = new Person ("GlenBuck", 36);
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
    expect(person.mars()).toEqual(19)
  });


});