import Person from '../src/js/space.js';

describe('Person', () => {
  let person; beforeEach(() => {
    person = new Person ("GlenBuck", 36);
  });

  test('should take user input and create object', () => {
    expect(person.name).toEqual("GlenBuck");
    expect(person.age).toEqual(36);
  });

  test('should show user age in mercury age,', () => {
    expect(person.mercury()).toEqual(145)  
  });


});