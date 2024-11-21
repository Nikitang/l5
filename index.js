import Email from "./src/EmailSchema.js";
import Age from "./src/AgeSchema.js";
import Schema from "./src/ObjectSchema.js";

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

const v = new Validator();
const emailSchema = v.email();
const ageSchema1 = v.age();
const schema = v.user().shape({
  email: v.email().setEmailLengthConstraint(5),
  age: v.age().isAdult(),
});
console.log(schema.isValid({ email: "HeyHey@hotmail.eu" }));

export default Validator;
