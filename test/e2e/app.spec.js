const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', () => {
  let pageObject = null;

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  it('should contain a <h1> element for the page title', () =>
  pageObject
    .evaluate(() => document.querySelector('h1').innerText)
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal('Mortgage Calculator');
    })
  );

  it('should contain a <input> element with the name principal', () =>
  pageObject
    .evaluate(() => document.querySelector('input[name=principal]'))
    .then(inputName => {
      expect(inputName).to.not.be.null;
    })
  );


  it('should contain a <input> element with the name interestRate', () =>
  pageObject
    .evaluate(() => document.querySelector('input[name=interestRate]'))
    .then(inputName => {
      expect(inputName).to.not.be.null;
    })
  );

  it('should contain a <select> element with the name period', () =>
  pageObject
    .evaluate(() => document.querySelector('select[name=period]'))
    .then(inputName => {
      expect(inputName).to.not.be.null;
    })
  );

  it('should contain a <button> element with the id calculate', () =>
  pageObject
    .evaluate(() => document.querySelector('button[id=calculate]'))
    .then(button => {
      expect(button).to.not.be.null;
    })
  );


  it('should contain a <p> element with the id output', () =>
  pageObject
    .evaluate(() => document.querySelector('output[id=output]'))
    .then(pText => {
      expect(pText).to.not.be.null;
    })
  );


  it('should correctly calculate mortgage', () =>
  pageObject
  .wait()
  .type('input[name=principal]', 300000)
  .type('input[name=interestRate]', 3.75)
  .type('input[name=loanTerm]', 30)
  .select('select[name=period]', 12)
  .click('button#calculate')
  .wait('#output')
  .evaluate(() => document.querySelector('#output').innerText)
  .then((outputText) => {
    expect(outputText).to.equal('$1389.35');
  })
).timeout(6500);
});
