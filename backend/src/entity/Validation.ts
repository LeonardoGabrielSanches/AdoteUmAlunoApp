class Validation {
  private invalid: boolean;
  private message: string;

  constructor() {
    this.invalid = false;
  }

  setMessage(message: string) {
    this.message = message;
    this.invalid = true;
  }

  getMessage() {
    return this.message;
  }

  getInvalid() {
    return this.invalid;
  }
}

export default Validation;
