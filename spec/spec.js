var code = require('./../grader.js');

describe('takes a test score and returns equivalent letter grade', function() {
  it('#letterGrader()', function() {
    expect(code.letterGrader(98)).toEqual('A')
    expect(code.letterGrader(88)).toEqual('B')
    expect(code.letterGrader(78)).toEqual('C')
    expect(code.letterGrader(68)).toEqual('D')
    expect(code.letterGrader(58)).toEqual('F')
  });
});

describe('takes an array of test scores and returns the average', function() {
  it('#average()', function() {
    expect(code.average([48,99,89,79,100])).toEqual(83)
  });
});

describe('takes an array of test scores and returns the average', function() {
  it('#median()', function() {
    expect(code.median([50,60,70,80,90])).toEqual(70);
  });
  it('#median()', function() {
    expect(code.median([50,60,70,80,90,100])).toEqual(75);
  });
});

describe('takes an array of test scores and returns the one that occurs the most', function() {
  it('#mode()', function() {
    expect(code.mode([48,89,89,79,100])).toEqual(89)
  });
});
