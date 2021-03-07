module.exports = (str, bracketsConfig) => {
  if (str.length & 1) return false;

  const brackets = bracketsConfig.map(el => el.join(''));

  for (let i = 0; i < brackets.length; i++) {
    if ( str.includes(brackets[i]) ) {
      str = str.replace(brackets[i], '');
      i = -1;
    }
  }

  return !str;
}
