const {
    nameValidator,
    ageValidator,
    arrayValidator
} = require('../lib/Validator.js');

const dog = {
    name: 'Josh',
    age: 39,
    favoriteToys: ['bone', 'chew', 'ball']
};

const almostDog = {
    name: 'Nathan',
    age: '12'
};

const notDog = {
    name: null,
    age: 'Twelve'
};

const emptyDog = {};

describe('validators', () => {
    it('can take an object and returns a fields value', () => {
        expect(nameValidator.validate(dog)).toEqual('Josh');
        expect(nameValidator.validate(almostDog)).toEqual('Nathan');
        expect(() => nameValidator.validate(notDog)).toThrowErrorMatchingSnapshot();
        expect(() => nameValidator.validate(emptyDog)).toThrowErrorMatchingSnapshot();

        expect(ageValidator.validate(dog)).toEqual(39);
        expect(ageValidator.validate(almostDog)).toEqual(12);


        expect(arrayValidator.validate(dog)).toEqual(['bone', 'chew', 'ball']);
    });
});
