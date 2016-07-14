var caesarUtils = {};

caesarUtils.cSubstitute = (c,num) => caesarUtils.isAsciiLower(c) || caesarUtils.isAsciiUpper(c)
                                      ? caesarUtils.cShift(c,num) : c;

caesarUtils.cShift = (c,num) => {
  var returnVal = c.charCodeAt() + num;

  if (caesarUtils.isAsciiUpper(c)) {
    returnVal = caesarUtils.upperOverflow(returnVal);
  } else if (caesarUtils.isAsciiLower(c)) {
    returnVal = caesarUtils.lowerOverflow(returnVal);
  }
  return String.fromCharCode(parseInt(returnVal));
}

caesarUtils.isAsciiUpper = a => a.charCodeAt() >= 65 && a.charCodeAt() <= 90;

caesarUtils.isAsciiLower = a => a.charCodeAt() >= 97 && a.charCodeAt() <= 122;

caesarUtils.lowerOverflow = c => {
  if (c < 97) {
    c =  123 - (97 % c);
  } else if (c > 122) {
    c = 96 + (c % 122);
  }
  return c;
}

caesarUtils.upperOverflow = c => {
  if (c < 65) {
    c =  91 - (65 % c);
  } else if (c > 90) {
    c = 64 + (c % 90);
  }
  return c;
}

module.exports = (plaintext,num) => {
    return plaintext
            .split('')
            .map(c => caesarUtils.cSubstitute(c,num))
            .join('');
}
