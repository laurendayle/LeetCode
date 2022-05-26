/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  title = title.split(' ');
  const sentenceCased = title.map((word) => {
    if (word.length === 1 || word.length === 2) {
      return word.toLowerCase();
    } else {
      let capitalized = word.slice(0, 1).toUpperCase();
      let remaining = word.slice(1, word.length).toLowerCase();
      return capitalized += remaining;
    }
  })
  return sentenceCased.join(' ');
};