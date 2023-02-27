module.exports = function reverse (n) {
  let reversedNum = '';
    let numString = n.toString();
  
    for (let i = numString.length - 1; i >= 0; i--) {
      reversedNum += numString[i];
    }
  
    return parseInt(reversedNum)
}
