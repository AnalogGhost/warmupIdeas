function watneyEncoder(plainText) {
  return plainText
    .split('')
    .map(c => c.charCodeAt().toString(16))
    .join('\n');
}

function watneyDecoder(cypherText) {
  return cypherText
    .split('\n')
    .map(h => String.fromCharCode(parseInt(h,16)))
    .join('');
}

function stringToArc(plaintext) {
  return plainText
    .split('')
    .map(c => c.charCodeAt().toString(16))
    .join('')
    .split('')
    .map(d => parseInt(d,16) * 22.5)
    .join('\n');
}

// var cypherText = watneyEncoder("In your face, Neil Armstrong!");
// console.log(cypherText);
// var plainText = watneyDecoder(cypherText);
// console.log(plainText);
// var degrees = stringToArc(plainText);
// console.log(degrees);
//
// var cypherText = watneyEncoder("Why do programmers always mix up Halloween and Christmas?\nBecause Oct 31 == Dec 25!");
// console.log(cypherText);
//
// var plainText = watneyDecoder(cypherText);
// console.log(plainText);

var cypherText = watneyEncoder("//Life Motto\nif(sad() === true) {\n\tsad.stop();\n\tbeAwesome();\n}");
console.log(cypherText);

var plainText = watneyDecoder(cypherText);
console.log(plainText);
