class Age {
  constructor() {
    this.adult = false;
    this.age = 0;
  }

  isValid(age) {
    this.age = age;
    return this.adult
      ? typeof this.age === "number" && this.validationAge() && !isNaN(age)
      : typeof this.age === "number" && !isNaN(age);
  }

  validationAge() {
    return this.age >= 18;
  }

  isAdult() {
    this.adult = true;
    return this;
  }
}

export default Age;
