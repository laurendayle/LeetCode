/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {

  if (s.length !== t.length) {
    return false;
  }
  const str1 = s.split('').sort();
  const str2 = t.split('').sort();

  return str1.join('') === str2.join('');
}