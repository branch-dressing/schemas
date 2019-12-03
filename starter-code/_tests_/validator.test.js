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
    age: '12',
    favoriteToys: () => {}
};

const notDog = {
    name: null,
    age: 'Twelve',
    favoriteToys: null
};

const emptyDog = {};

describe('validators', () => {
    it('can take an object and returns a fields value', () => {
        // Test that validate method can take an object and return a fields value
        expect(nameValidator.validate(dog)).toEqual('Josh');
        // required and field there and right type
        expect(nameValidator.validate(almostDog)).toEqual('Nathan');
        // required and field there but wrong type
        expect(() => nameValidator.validate(notDog)).toThrowErrorMatchingSnapshot();
        //required and field missing
        expect(() => nameValidator.validate(emptyDog)).toThrowErrorMatchingSnapshot();
        
        expect(ageValidator.validate(dog)).toEqual(39);
        expect(ageValidator.validate(almostDog)).toEqual(12);
        // Test that validate method can take an object and throw an error
        expect(() => ageValidator.validate(notDog)).toThrowErrorMatchingSnapshot();
        
        // not required and field there and right type
        expect(arrayValidator.validate(dog)).toEqual(['bone', 'chew', 'ball']);
        // not required and field there but wrong type
        expect(() => arrayValidator.validate(almostDog)).toThrowErrorMatchingSnapshot();
        // not required and field missing
        expect(arrayValidator.validate(notDog)).toEqual('Not Required');
    });
});
