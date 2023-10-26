let calculator = {
    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    },

    sub() {
        return this.a - this.b;
    },

    div() {
        return this.a/this.b;
    },

    read() {
      this.a = +prompt('Number A?: ', 0);
      this.b = +prompt('Number B?:', 0);
    }
}
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );