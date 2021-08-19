module.exports = function reverse (n) {
  n = Math.abs(n);  
  let str = n.toString();
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
      strReverse += str[i];
    }
  return strReverse;
}
