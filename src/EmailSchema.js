class Email {
  constructor() {
    this.min = 0;
    this.max = Infinity;
  }
  isValid(arg) {
    if (typeof arg === "string") {
      const beforeTag = arg.split("@")[0].length;
      console.log(beforeTag);
      return (
        typeof arg === "string" &&
        arg.includes("@") &&
        beforeTag >= this.min &&
        beforeTag <= this.max
      );
    } else return false;
  }

  setEmailLengthConstraint(min, max = Infinity) {
    this.min = min;
    this.max = max;
    return this;
  }
}

export default Email;
