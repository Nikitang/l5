class Schema {
  isValid(user) {
    const validator = Object.keys(user).map((item) => {
      if (
        !this.schema[item] ||
        Object.keys(user).length !== Object.keys(this.schema).length
      )
        return false;
      return this.schema[item].isValid(user[item]);
    });
    return !validator.includes(false);
  }
  shape(obj) {
    this.schema = obj;
    return this;
  }
}

export default Schema;
