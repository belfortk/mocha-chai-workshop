module.exports = class Mortgage {
  constructor(principal, interest, term) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
  }

  get monthlyPayment() {
    const principal = this.principal;
    const monthlyInterestRate = (this.interest/12) * 0.01;
    const numPayments = this.term * 12;
    const monthlyPayments = (principal * (monthlyInterestRate*(Math.pow((1+monthlyInterestRate),numPayments)))/((Math.pow((1+monthlyInterestRate),numPayments))-1)).toFixed(2);
    return parseFloat(monthlyPayments);
  }
}
