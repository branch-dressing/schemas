const Validator = require('./Validator.js');

class Schema {
    constructor(bigObject) {
        this.bigObject = bigObject;
        this.validators = Object.entries(bigObject.map(entry => {
            return new Validator(entry[0], entry[1]);
        }));
    }

    validate(object) {
        const validatedObject = {};
        this.validators.forEach(validator => {
            validatedObject[validator.objectKey] = validator.validate(object);
        });
        return validatedObject;
    }

}

module.exports = Schema;
