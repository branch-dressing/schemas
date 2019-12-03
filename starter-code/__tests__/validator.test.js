const {
    nameValidator,
    ageValidator
} = require('../lib/Validator.js');

const dog = {
    name: 'Josh',
    age: 39,
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
        expect(ageValidator.validate(dog)).toEqual(39);
    });
});
