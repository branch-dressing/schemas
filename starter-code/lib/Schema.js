const { Validator } = require('./Validator.js');

class Schema {
    constructor(bigObject) {
        this.bigObject = bigObject;
        this.validators = Object.entries(bigObject)
            .map(entry => new Validator(entry[0], entry[1]));
    }

    validate(object) {
        const validatedObject = {};
        this.validators.forEach(validator => {
            validatedObject[validator.objectKey] = validator.validate(object);
        });
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
