var module = module || {};`

jest.dontMock('../app/thing');  // Don't create mock functions
var thetest = require('../app/thing');

describe('wordcheck', function() {
  it('checks for word count to be less than 100', function() {
    expect(thetest.checkWordCount("test less than 100")).toBe(true);
  });
  it('checks for word count to be less than 100', function() {
    expect(thetest.checkWordCount("test word count less than 100"))
    .toBe(false);
  });
});

describe('dupcheck', function() {
  it('checks to make sure there are no duplicates', function() {
    expect(thetest.duplicateCheck("checks for duplicates")).toBe(false);
  });
  it('checks to make sure there are no duplicates', function() {
    expect(thetest.duplicateCheck("check for duplicates")).toBe(true);
  });
});

describe('charcheck', function() {
  it('checks to make sure there are no special characters', function() {
    expect(thetest.verifyAlphaNumeric("checks for special characters")).toBe(true);
  });
  it('checks to make sure there are no special characters', function() {
    expect(thetest.verifyAlphaNumeric("checks for special characters")).toBe(false);
  });
});