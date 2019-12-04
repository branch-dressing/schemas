const {
    nameValidator,
    ageValidator,
    arrayValidator
} = require('../lib/Validator.js');

const { 
    schema
} = require('../lib/Schema.js');

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

const almostDogPassing = {
    name: 'Bobby',
    age: 6
};

const notDog = {
    name: null,
    age: 'Twelve',
    favoriteToys: null
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
        expect(() => ageValidator.validate(notDog)).toThrowErrorMatchingSnapshot();
        expect(arrayValidator.validate(dog)).toEqual(['bone', 'chew', 'ball']);
        expect(() => arrayValidator.validate(almostDog)).toThrowErrorMatchingSnapshot();
        expect(arrayValidator.validate(almostDogPassing)).toEqual(null);
        expect(arrayValidator.validate(notDog)).toEqual(null);
    });
});

describe('Schemas', () => {
    it('when given an object it validates and casts that object', () => {
        expect(schema.validate(dog)).toEqual({
            name: 'Josh',
            age: 39,
            favoriteToys: ['bone', 'chew', 'ball']
        });
        expect(() => schema.validate(almostDog)).toThrowErrorMatchingSnapshot();
        expect(schema.validate(almostDogPassing)).toEqual({
            name: 'Bobby',
            age: 6,
            favoriteToys: null
        });
        expect(() => schema.validate(notDog)).toThrowErrorMatchingSnapshot();
        expect(() => schema.validate(emptyDog)).toThrowErrorMatchingSnapshot();
    });
});
