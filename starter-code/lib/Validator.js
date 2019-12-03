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

module.exports = {
    nameValidator,
    ageValidator
};
