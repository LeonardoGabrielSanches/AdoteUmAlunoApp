class Validation {
  public invalid: boolean;
  private messages: string[];

  constructor() {
    this.messages = new Array();
    this.invalid = false;
  }

  setMessage(message: string) {
    this.messages.push(message);
    this.invalid = true;
  }

  getErrorMessage() {
      return this.messages[0];
  }
}

export default Validation;
