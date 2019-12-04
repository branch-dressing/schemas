const {
    getCaster
} = require('./types.js');

class Validator {
    constructor(objectKey, { type, required }) {
        this.objectKey = objectKey;
        this.type = type;
        this.required = required;
    }

    validate(object) {
        if(!this.required && !object[this.objectKey]) return 'Not Required';
        const functionToCast = getCaster(this.type);
        const valueAtKey = functionToCast(object[this.objectKey]);
        return valueAtKey;
    }
}

const nameValidator = new Validator('name', {
    type: String,
    required: true
});

const ageValidator = new Validator('age', {
    type: Number,
    required: true
});

const arrayValidator = new Validator('favoriteToys', {
    type: Array,
    required: false
});

module.exports = {
    nameValidator,
    ageValidator,
    arrayValidator,
    Validator
};
