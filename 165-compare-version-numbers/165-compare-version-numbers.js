/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');

  let n1 = v1.length, n2 = v2.length;

  for (let i = 0; i < Math.max(n1, n2); i++) {
    let i1 = i < n1 ? parseInt(v1[i]) : 0;
    let i2 = i < n2 ? parseInt(v2[i]) : 0;

    if (i1 !== i2) {
      return i1 > i2 ? 1 : -1;
    }
  }
  return 0;
};