const expect = require("chai").expect;
const MortgageCalculator = require("../../src/js/lib/Mortgage");

describe('Mortgage Calculator', () => {
  let mortgageCalculator = null;

  beforeEach(() => {
    mortgageCalculator = new MortgageCalculator(670000, 4.25, 15);
  });

  it('should have a constructor method', () => {
    expect(MortgageCalculator).to.exist;
  });

  it('should have a get function', () => {
    expect(mortgageCalculator.monthlyPayment).to.equal(5040.27);
  });
});


describe('Mortgage Calculator', () => {
  let mortgageCalculator = null;

  beforeEach(() => {
    mortgageCalculator = new MortgageCalculator(420000, 3.75, 30);
  });

  it('should have an constructor method', () => {
    expect(mortgageCalculator).to.exist;
  });

  it('should have a get function', () => {
    expect(mortgageCalculator.monthlyPayment).to.equal(1945.09);
  });
});
