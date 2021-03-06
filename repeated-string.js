const repeatedString = (s, n) => {
  const regex = /a/g;
  const lengthOfS = s.length;
  const countOfAInS = (s.match(regex) || [])
    .length;
  const wholeNumber = parseInt(n / lengthOfS);
  const remainder = n % lengthOfS;
  return (wholeNumber * countOfAInS) + (remainder == 0 ? 0 : (s.substring(0, remainder)
    .match(regex) || [])
    .length);
};

console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));
