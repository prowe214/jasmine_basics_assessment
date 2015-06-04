module.exports = {
  letterGrader: function(a) {
    if (a >= 90) {return 'A'};
    if (a >= 80) {return 'B'};
    if (a >= 70) {return 'C'};
    if (a >= 60) {return 'D'};
    if (a < 60) {return 'F'};
  },
  average: function(arr) {
    var total = 0,
        avg;

    for (var i=0; i<arr.length; i++) {
      total += arr[i];
    };
    avg = total / arr.length;
    return avg;
  },
  median: function(arr) {
    var i,
        med;
    arr.sort();
    if (arr.length%2!==0) {
      i = Math.floor(arr.length / 2);
      return arr[i];
    };
    if (arr.length%2===0) {
      i = Math.floor(arr.length / 2);
      med = (arr[i] + arr[i+1]) / 2;
      return med;
    };
  },
  mode: function(arr) {
    var count = {},
        maxCount = 0,
        maxKey = '';

    for (var j=0; j<arr.length; j++) {
      if (!(arr[j] in count) === true) {
        count[arr[j]] = 0;
      };
      count[arr[j]]++;
      if (count[arr[j]] > maxCount) {
        maxCount = count[arr[j]];
        maxKey = arr[j];
      };
    };
    return maxKey;
  }
};
