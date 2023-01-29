module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
  for (var i = 0; i < str.length; i++) {
    var indexOfConfig = brackets.indexOf(str[i]);
    if (indexOfConfig % 2 === 0) {
      if (str[i] == stack[stack.length - 1] && brackets[indexOfConfig] == brackets[indexOfConfig + 1] ) {
        if (stack.length == 0) {
          return false;
        }
        stack.pop();
        //console.log('pop: ' + str[i])
      } else {
        //console.log('push: ' + str[i])
        stack.push(str[i]);
      }
      if (stack.length === 0 && i === str.length - 1) {
        //console.log('LAST1');
        return true;
      }
      continue;
    } 
    if (i === 0 && indexOfConfig % 2 !== 0) {
      return false;
    } else if (stack.length == 0) {
      return false;
    } else if (indexOfConfig == brackets.indexOf(stack[stack.length - 1]) + 1) {
      if (stack.length == 0) {
        return false;
      }
      stack.pop();
      //console.log('pop: ' + str[i])
    }
    if (stack.length === 0 && i === str.length - 1) {
      //console.log('LAST2');
      return true;
    }
  }
  return false;
}