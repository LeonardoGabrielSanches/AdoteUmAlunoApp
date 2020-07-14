class Validation {
  public invalid: boolean;

  private messages: string[];

  constructor() {
    this.messages = new Array();
    this.invalid = false;
  }

  setMessage(message: string) {
    if(!message)
      return;

    this.messages.push(message);
    this.invalid = true;
  }

  getErrorMessage() {
    console.log(this.messages)
    return this.messages[0];
  }
}

export default Validation;
