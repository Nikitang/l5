import Email from './src/EmailSchema.js';
import Age from './src/AgeSchema.js';
import Schema from './src/ObjectSchema.js';

class Validator {
  email() {
    return new Email();
  }

  age() {
    return new Age();
  }

  user() {
    return new Schema();
  }
}

export default Validator;
