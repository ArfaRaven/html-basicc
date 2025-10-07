function reverseWithoutNumbers(str) {

  let letters = str.split('').filter(char => {
    return !(char >= '0' && char <= '9');
  });
  
  return letters.reverse().join('');
}

console.log(reverseWithoutNumbers("hello123world456"));
console.log(reverseWithoutNumbers("abc123xyz")); 

module.exports = reverseWithoutNumbers;



  // (.   \
  //   \  |  
  //    \ |___(\--/)
  //  __/    (  . . )
  // "'._.    '-.O.'
  //      '-.  \ "|\
  //         '.,,/'.,,mrf
