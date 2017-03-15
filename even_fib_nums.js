/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var fibSeq = [0,1];

  while (maxFibValue > fibSeq[fibSeq.length - 1]) {
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length -2]);
  }
  for (var i = 0; i < fibSeq.length; i++) {
    if (fibSeq[i] % 2 === 0) {
      sum += fibSeq[i];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  var fibSeq = [0,1];

  while (maxFibValue > fibSeq[fibSeq.length - 1]) {
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length -2]);
  }
  console.log(fibSeq);

  highest = fibSeq[fibSeq.length - 2];
  //do your work here
  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};