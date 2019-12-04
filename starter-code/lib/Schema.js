const { Validator } = require('./Validator.js');

class Schema {
    constructor(bigObject) {
        this.bigObject = bigObject;
        this.validators = Object.entries(bigObject)
            .map(entry => new Validator(entry[0], entry[1]));
    }

    validate(object) {
        const validatedObject = {};
        const errors = [];
        this.validators.forEach(validator => {
            try {
                validatedObject[validator.objectKey] = validator.validate(object);
            } catch(error) {
                errors.push(error);
            }
        });
        if(errors.length > 0) {
            throw new Error (`invalid schema >>${errors}`);
        }
        console.log(validatedObject);
        return validatedObject;
    }

}

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    },
    favoriteToys: {
        type: Array,
        required: false
    }
});

module.exports = { schema };
