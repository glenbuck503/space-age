import Person from '../src/js/space.js';

describe('Person', () => {
  let person; beforeEach(() => {
    person = new Person ("GlenBuck", 36);
  });

  test('should take user input and create object', () => {
    expect(person.name).toEqual("GlenBuck");
    expect(person.age).toEqual(35);
  });

});